
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
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  // Add logo/branding
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(66, 133, 244);
  doc.text("learn.ruangedukasi.com", margin, 15);
  
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
  
  // Set up title with a card-like appearance
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, 20, contentWidth, 15, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, 20, contentWidth, 15, 3, 3, 'S');
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(40, 40, 40);
  doc.text("HASIL TES GAYA BELAJAR", pageWidth/2, 30, { align: 'center' });
  
  // Main result card - more compact
  const yPosition = 45;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, yPosition, contentWidth, 40, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, yPosition, contentWidth, 40, 3, 3, 'S');
  
  // Define color map for learning styles
  const colorMap = {
    visual: [167, 199, 231],     // pastel blue
    auditory: [230, 230, 250],   // pastel lavender
    kinesthetic: [255, 216, 190] // pastel peach
  };
  
  // Dominant Style heading
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(40, 40, 40);
  const dominantStyle = learningStyles[result.dominantStyle];
  doc.text(`Gaya Belajar Dominan: ${dominantStyle.title}`, margin + 5, yPosition + 10);
  doc.setFontSize(14);
  doc.text(`${result.percentage[result.dominantStyle]}%`, pageWidth - margin - 10, yPosition + 10, { align: 'right' });
  
  // Style color bar
  const dominantColor = colorMap[result.dominantStyle];
  doc.setFillColor(
    dominantColor[0], 
    dominantColor[1], 
    dominantColor[2]
  );
  doc.roundedRect(margin + 5, yPosition + 15, contentWidth - 10, 4, 1, 1, 'F');
  
  // Description under the bar
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  const descriptionLines = doc.splitTextToSize(dominantStyle.description, contentWidth - 15);
  doc.text(descriptionLines, margin + 5, yPosition + 25);
  
  // Percentages chart/card - more compact
  let currentY = yPosition + 45;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 30, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 30, 3, 3, 'S');
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("Distribusi Gaya Belajar:", margin + 5, currentY + 8);
  
  // Distribution bars - more compact
  const barHeight = 3;
  const maxBarWidth = 100;
  const barSpacing = 7;
  
  // Visual row
  currentY += 13;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text("Visual:", margin + 10, currentY);
  doc.text(`${result.percentage.visual}%`, margin + 40, currentY);
  
  // Visual bar
  doc.setFillColor(167, 199, 231); // pastel blue
  doc.roundedRect(
    margin + 50, 
    currentY - 3, 
    (maxBarWidth * result.percentage.visual) / 100, 
    barHeight, 
    1, 1, 'F'
  );
  
  // Auditory row
  currentY += barSpacing;
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
  currentY += barSpacing;
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
  
  // Traits section - more compact with icons
  currentY += 15;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 65, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 65, 3, 3, 'S');
  
  // Section title with color bar
  doc.setFillColor(
    dominantColor[0],
    dominantColor[1],
    dominantColor[2]
  );
  doc.rect(margin, currentY, 8, 15, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.text("Karakteristik:", margin + 12, currentY + 10);
  
  // Traits bullets
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  
  let bulletY = currentY + 20;
  const bulletSpacing = 9; // More compact spacing
  
  dominantStyle.traits.forEach((trait, index) => {
    if (index < 5) { // Limiting to 5 traits
      const bulletText = `• ${trait}`;
      const traitLines = doc.splitTextToSize(bulletText, contentWidth - 15);
      doc.text(traitLines, margin + 5, bulletY);
      bulletY += traitLines.length * bulletSpacing;
    }
  });
  
  // Strategies section - more compact with icons
  currentY += 70;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, contentWidth, 65, 3, 3, 'F');
  doc.setLineWidth(0.1);
  doc.setDrawColor(200, 200, 200);
  doc.roundedRect(margin, currentY, contentWidth, 65, 3, 3, 'S');
  
  // Section title with color bar
  doc.setFillColor(
    dominantColor[0],
    dominantColor[1],
    dominantColor[2]
  );
  doc.rect(margin, currentY, 8, 15, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.text("Rekomendasi Belajar:", margin + 12, currentY + 10);
  
  // Strategies bullets
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  
  bulletY = currentY + 20;
  dominantStyle.strategies.forEach((strategy, index) => {
    if (index < 5) { // Limiting to 5 strategies for space
      const bulletText = `• ${strategy}`;
      const strategyLines = doc.splitTextToSize(bulletText, contentWidth - 15);
      doc.text(strategyLines, margin + 5, bulletY);
      bulletY += strategyLines.length * bulletSpacing;
    }
  });
  
  // Footer with branding
  doc.setFillColor(230, 236, 245);
  doc.rect(0, 285, pageWidth, 12, 'F');
  
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("learn.ruangedukasi.com", margin, 292);
  doc.text("© " + new Date().getFullYear() + " Ruang Edukasi", pageWidth - margin, 292, { align: 'right' });
  
  return doc.save("hasil-tes-gaya-belajar.pdf");
};
