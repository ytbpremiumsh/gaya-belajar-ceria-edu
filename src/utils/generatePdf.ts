
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
  
  // Add logo
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, 297, 'F');
  
  // Set up title
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text("HASIL TES GAYA BELAJAR", margin, 30, { align: 'left' });
  
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
  doc.text(currentDate, margin, 38);
  
  // Add horizontal line
  doc.setLineWidth(0.5);
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, 42, pageWidth - margin, 42);
  
  // Main result
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  const dominantStyle = learningStyles[result.dominantStyle];
  doc.text(`Gaya Belajar Dominan: ${dominantStyle.title}`, margin, 55);
  
  // Percentages
  doc.setFontSize(12);
  doc.text("Distribusi Gaya Belajar:", margin, 65);
  
  doc.setFont('helvetica', 'normal');
  doc.text(`Visual: ${result.percentage.visual}%`, margin + 10, 73);
  doc.text(`Auditori: ${result.percentage.auditory}%`, margin + 10, 81);
  doc.text(`Kinestetik: ${result.percentage.kinesthetic}%`, margin + 10, 89);
  
  // Bar charts for percentages
  const barHeight = 6;
  const maxBarWidth = 100;
  
  // Visual bar
  doc.setFillColor(167, 199, 231); // pastel blue
  doc.rect(
    pageWidth - margin - maxBarWidth, 
    70, 
    (maxBarWidth * result.percentage.visual) / 100, 
    barHeight, 
    'F'
  );
  
  // Auditory bar
  doc.setFillColor(230, 230, 250); // pastel lavender
  doc.rect(
    pageWidth - margin - maxBarWidth, 
    78, 
    (maxBarWidth * result.percentage.auditory) / 100, 
    barHeight, 
    'F'
  );
  
  // Kinesthetic bar
  doc.setFillColor(255, 216, 190); // pastel peach
  doc.rect(
    pageWidth - margin - maxBarWidth, 
    86, 
    (maxBarWidth * result.percentage.kinesthetic) / 100, 
    barHeight, 
    'F'
  );
  
  // Description
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text("Tentang Gaya Belajar Kamu:", margin, 105);
  
  doc.setFont('helvetica', 'normal');
  const descriptionLines = doc.splitTextToSize(dominantStyle.description, contentWidth);
  doc.text(descriptionLines, margin, 115);
  
  // Traits
  let currentY = 115 + (descriptionLines.length * 6);
  doc.setFont('helvetica', 'bold');
  doc.text("Karakteristik:", margin, currentY);
  doc.setFont('helvetica', 'normal');
  
  dominantStyle.traits.forEach((trait, index) => {
    currentY += 8;
    doc.text(`• ${trait}`, margin + 5, currentY);
  });
  
  // Strategies
  currentY += 10;
  doc.setFont('helvetica', 'bold');
  doc.text("Rekomendasi Belajar:", margin, currentY);
  doc.setFont('helvetica', 'normal');
  
  dominantStyle.strategies.forEach((strategy, index) => {
    currentY += 8;
    doc.text(`• ${strategy}`, margin + 5, currentY);
  });
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("Tes Gaya Belajar | Ruang Edukasi", margin, 280);
  doc.text("www.ruangedukasi.web.id", pageWidth - margin, 280, { align: 'right' });
  
  return doc.save("hasil-tes-gaya-belajar.pdf");
};
