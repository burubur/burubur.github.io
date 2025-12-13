import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

export const generateResumePDF = async () => {
  // Open the resume page in a hidden iframe
  const iframe = document.createElement("iframe")
  iframe.style.position = "absolute"
  iframe.style.left = "-9999px"
  iframe.style.width = "8.5in"
  iframe.style.height = "11in"
  document.body.appendChild(iframe)

  // Wait for iframe to load
  await new Promise((resolve) => {
    iframe.onload = resolve
    iframe.src = "/resume-print"
  })

  // Wait a bit for content to render
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const resumeContainer = iframe.contentDocument.querySelector(".resume-container")

  if (!resumeContainer) {
    document.body.removeChild(iframe)
    throw new Error("Resume container not found")
  }

  // Generate canvas from HTML
  const canvas = await html2canvas(resumeContainer, {
    scale: 2,
    useCORS: true,
    logging: false,
  })

  // Create PDF with custom taller page size (8.5 x 14 inches - Legal size)
  const pageWidth = 612 // 8.5 inches * 72 DPI
  const pageHeight = 1008 // 14 inches * 72 DPI (instead of 11 inches)

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: [pageWidth, pageHeight],
  })

  const margin = 40 // 40pt margin on all sides

  // Calculate scaling to fit content within page width (with margins)
  const contentWidth = pageWidth - (margin * 2)
  const scaleFactor = contentWidth / canvas.width
  const scaledHeight = canvas.height * scaleFactor

  const imgData = canvas.toDataURL("image/png")

  // Calculate how many pages we need
  const availableHeight = pageHeight - (margin * 2)
  let heightRemaining = scaledHeight
  let sourceY = 0

  // Add pages and slice content appropriately
  while (heightRemaining > 0) {
    const heightToPrint = Math.min(availableHeight, heightRemaining)

    // For subsequent pages, add a new page
    if (sourceY > 0) {
      pdf.addPage()
    }

    // Calculate the slice of the image to add
    pdf.addImage(
      imgData,
      "PNG",
      margin,
      margin - sourceY,
      contentWidth,
      scaledHeight
    )

    sourceY += availableHeight
    heightRemaining -= availableHeight
  }

  // Clean up
  document.body.removeChild(iframe)

  // Download PDF
  pdf.save("Burhan_Mubarok_Resume.pdf")
}
