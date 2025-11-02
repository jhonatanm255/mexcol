import React from 'react';

/**
 * Formatea texto con marcadores especiales:
 * - **texto** para negrita
 * - *texto* para cursiva
 * - ***texto*** para negrita + cursiva
 * - `texto` para código
 * 
 * @param text - Texto con marcadores de formato
 * @returns Array de elementos React formateados
 * 
 * @example
 * formatText('Aprende con los **mejores** expertos y *profesionales* destacados')
 */
export function formatText(text: string): React.ReactNode[] {
  if (!text) return [];
  
  const parts: React.ReactNode[] = [];
  let key = 0;
  
  // Regex para encontrar:
  // ***texto*** (negrita + cursiva)
  // **texto** (negrita)
  // *texto* (cursiva)
  // `texto` (código)
  const regex = /(\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Añadir texto antes del match
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    
    // Añadir el texto formateado según el tipo de marcador
    if (match[1].startsWith('***')) {
      // Negrita + cursiva
      parts.push(
        <strong key={key++}>
          <em>{match[2]}</em>
        </strong>
      );
    } else if (match[1].startsWith('**')) {
      // Negrita
      parts.push(<strong key={key++}>{match[3]}</strong>);
    } else if (match[1].startsWith('`')) {
      // Código
      parts.push(<code key={key++} className="bg-muted px-1 py-0.5 rounded text-sm">{match[5]}</code>);
    } else {
      // Cursiva
      parts.push(<em key={key++}>{match[4]}</em>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Añadir texto restante
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(remainingText);
    }
  }
  
  // Si no se encontró ningún formato, devolver el texto tal cual
  return parts.length > 0 ? parts : [text];
}

/**
 * Componente React para renderizar texto formateado
 * 
 * @example
 * <FormattedText>
 *   Aprende con los **mejores** expertos y *profesionales* destacados
 * </FormattedText>
 */
export function FormattedText({ 
  children, 
  className 
}: { 
  children: string; 
  className?: string;
}) {
  return <span className={className}>{formatText(children)}</span>;
}

