
import { jsPDF } from 'jspdf';
import { QuizResult } from '@/types';
import { learningStyles } from '@/data/learningStyles';

export const generatePdf = (result: QuizResult) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // Define constants for positioning
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  // Add background
  doc.setFillColor(248, 250, 252); // Light background color
  doc.rect(0, 0, pageWidth, 297, 'F');
  
  // Add decorative header
  doc.setFillColor(230, 236, 245); // Light blue background for header
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  // Add logo/branding
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(66, 133, 244);
  doc.text("learn.ruangedukasi.com", margin, 15);
  
  // Set up title with a card-like appearance
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, 25, contentWidth, 20, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, 25, contentWidth, 20, 3, 3, 'S');
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(40, 40, 40);
  doc.text("HASIL TES GAYA BELAJAR", pageWidth/2, 38, { align: 'center' });
  
  // Add date
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  const currentDate = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  doc.text(currentDate, pageWidth - margin, 15, { align: 'right' });
  
  // Main result card
  const yPosition = 60;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, yPosition, contentWidth, 45, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, yPosition, contentWidth, 45, 3, 3, 'S');
  
  // Dominant Style heading
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 40);
  const dominantStyle = learningStyles[result.dominantStyle];
  doc.text(`Gaya Belajar Dominan: ${dominantStyle.title}`, margin + 5, yPosition + 10);
  doc.setFontSize(14);
  doc.text(`${result.percentage[result.dominantStyle]}%`, pageWidth - margin - 10, yPosition + 10, { align: 'right' });
  
  // Style color bar
  const colorMap = {
    visual: [167, 199, 231],     // pastel blue
    auditory: [230, 230, 250],   // pastel lavender
    kinesthetic: [255, 216, 190] // pastel peach
  };
  
  doc.setFillColor(...colorMap[result.dominantStyle]);
  doc.roundedRect(margin + 5, yPosition + 15, contentWidth - 10, 5, 1, 1, 'F');
  
  // Description under the bar
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  const descriptionLines = doc.splitTextToSize(dominantStyle.description, contentWidth - 15);
  doc.text(descriptionLines, margin + 5, yPosition + 30);
  
  // Percentages chart/card
  let currentY = yPosition + 60;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 40, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 40, 3, 3, 'S');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text("Distribusi Gaya Belajar:", margin + 5, currentY + 10);
  
  // Visual row
  currentY += 18;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text("Visual:", margin + 10, currentY);
  doc.text(`${result.percentage.visual}%`, margin + 40, currentY);
  
  // Visual bar
  const barHeight = 4;
  const maxBarWidth = 100;
  doc.setFillColor(167, 199, 231); // pastel blue
  doc.roundedRect(
    margin + 50, 
    currentY - 3, 
    (maxBarWidth * result.percentage.visual) / 100, 
    barHeight, 
    1, 1, 'F'
  );
  
  // Auditory row
  currentY += 10;
  doc.text("Auditori:", margin + 10, currentY);
  doc.text(`${result.percentage.auditory}%`, margin + 40, currentY);
  
  // Auditory bar
  doc.setFillColor(230, 230, 250); // pastel lavender
  doc.roundedRect(
    margin + 50, 
    currentY - 3, 
    (maxBarWidth * result.percentage.auditory) / 100, 
    barHeight, 
    1, 1, 'F'
  );
  
  // Kinesthetic row
  currentY += 10;
  doc.text("Kinestetik:", margin + 10, currentY);
  doc.text(`${result.percentage.kinesthetic}%`, margin + 40, currentY);
  
  // Kinesthetic bar
  doc.setFillColor(255, 216, 190); // pastel peach
  doc.roundedRect(
    margin + 50, 
    currentY - 3, 
    (maxBarWidth * result.percentage.kinesthetic) / 100, 
    barHeight, 
    1, 1, 'F'
  );
  
  // Traits section
  currentY += 20;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 80, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 80, 3, 3, 'S');
  
  // Section title with color bar
  doc.setFillColor(...colorMap[result.dominantStyle]);
  doc.rect(margin, currentY, 8, 20, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text("Karakteristik:", margin + 12, currentY + 12);
  
  // Traits bullets
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  let bulletY = currentY + 25;
  dominantStyle.traits.forEach((trait, index) => {
    const bulletText = `• ${trait}`;
    const traitLines = doc.splitTextToSize(bulletText, contentWidth - 15);
    doc.text(traitLines, margin + 5, bulletY);
    bulletY += traitLines.length * 6;
  });
  
  // Strategies section
  currentY += 90;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 80, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 80, 3, 3, 'S');
  
  // Section title with color bar
  doc.setFillColor(...colorMap[result.dominantStyle]);
  doc.rect(margin, currentY, 8, 20, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  doc.text("Rekomendasi Belajar:", margin + 12, currentY + 12);
  
  // Strategies bullets
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  bulletY = currentY + 25;
  dominantStyle.strategies.forEach((strategy, index) => {
    const bulletText = `• ${strategy}`;
    const strategyLines = doc.splitTextToSize(bulletText, contentWidth - 15);
    doc.text(strategyLines, margin + 5, bulletY);
    bulletY += strategyLines.length * 6;
  });
  
  // Footer with fancy border
  doc.setFillColor(230, 236, 245);
  doc.rect(0, 285, pageWidth, 12, 'F');
  
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("Tes Gaya Belajar | learn.ruangedukasi.com", margin, 292);
  doc.text("© " + new Date().getFullYear() + " Ruang Edukasi", pageWidth - margin, 292, { align: 'right' });
  
  return doc.save("hasil-tes-gaya-belajar.pdf");
};
