"""Creates public/Arib-Tawsif-Hassan-CV.pdf, a clearly labelled placeholder.

It contains no personal details: it only tells the reader that the real CV has not been uploaded yet.
Replace the generated file with your own CV (same file name) and the Download CV buttons serve it.
Run with:  python3 scripts/make-placeholder-cv.py   (needs the reportlab package)
"""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

out = sys.argv[1] if len(sys.argv) > 1 else "public/Arib-Tawsif-Hassan-CV.pdf"
width, height = A4

pdf = canvas.Canvas(out, pagesize=A4)
pdf.setTitle("Arib Tawsif Hassan - CV placeholder")
pdf.setAuthor("Arib Tawsif Hassan")

pdf.setFillColorRGB(0.039, 0.157, 0.114)
pdf.rect(0, height - 200, width, 200, stroke=0, fill=1)
pdf.setFillColorRGB(0.969, 0.941, 0.863)
pdf.setFont("Times-Roman", 34)
pdf.drawString(60, height - 105, "Arib Tawsif Hassan")
pdf.setFillColorRGB(0.851, 0.737, 0.4)
pdf.setFont("Times-Italic", 16)
pdf.drawString(60, height - 135, "Digital Professional & Creative Entrepreneur")

pdf.setFillColorRGB(0.039, 0.157, 0.114)
pdf.setFont("Times-Bold", 22)
pdf.drawString(60, height - 280, "CV placeholder")
pdf.setFont("Times-Roman", 14)
lines = [
    "This is a placeholder file. The real CV has not been uploaded yet.",
    "",
    "To replace it:",
    "1. Export your CV as a PDF.",
    "2. Name it Arib-Tawsif-Hassan-CV.pdf.",
    "3. Put it in the public folder of the website project, replacing this file.",
    "4. Commit the change and Netlify will publish the new CV automatically.",
]
y = height - 315
for line in lines:
    pdf.drawString(60, y, line)
    y -= 22

pdf.showPage()
pdf.save()
print(f"wrote {out}")
