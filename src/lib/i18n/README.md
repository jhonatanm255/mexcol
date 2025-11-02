# Guía de i18n - Sistema de Traducciones Modularizado

## Estructura

Las traducciones están organizadas de la siguiente manera:

```
src/lib/i18n/
├── en/                 # Traducciones en inglés
│   ├── metadata.ts
│   ├── navbar.ts
│   ├── hero.ts
│   ├── home.ts
│   ├── about.ts
│   ├── academicPrograms.ts
│   └── ... (más secciones)
├── es/                 # Traducciones en español
│   ├── metadata.ts
│   ├── navbar.ts
│   ├── hero.ts
│   ├── home.ts
│   ├── about.ts
│   ├── academicPrograms.ts
│   └── ... (más secciones)
├── index.ts             # Exporta las traducciones combinadas
└── README.md           # Esta guía
```

## Uso

### Importar traducciones

```typescript
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/hooks/use-language';

function MyComponent() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <h1>{t.home.hero.main}</h1>;
}
```

## 📝 Cómo agregar textos en negrita, cursiva y otros formatos

### ⚡ Método Rápido: Usar marcadores especiales (Recomendado)

Ya existe una función helper lista para usar. Solo necesitas agregar marcadores en tus textos de traducción:

**Marcadores disponibles:**
- `**texto**` → **negrita**
- `*texto*` → *cursiva*
- `***texto***` → ***negrita + cursiva***
- `` `texto` `` → `código`

**Ejemplo práctico:**

```typescript
// En tu archivo de traducción (ej: src/lib/i18n/es/home.ts)
export const home = {
  hero: {
    main: 'Instituto Mex - Col - Usa',
    sub: 'Aprende con los **mejores profesionales** en *medicina estética*',
    description: 'Explora ***programas únicos*** y `técnicas avanzadas`',
  }
};
```

```tsx
// En tu componente
import { formatText } from '@/lib/utils/text-formatting';
import { translations } from '@/lib/i18n';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div>
      <h1>{t.home.hero.main}</h1>
      <p>{formatText(t.home.hero.sub)}</p>
      {/* Resultado: Aprende con los mejores profesionales en medicina estética */}
    </div>
  );
}
```

**O usando el componente:**

```tsx
import { FormattedText } from '@/lib/utils/text-formatting';

<p>
  <FormattedText>
    {t.home.hero.sub}
  </FormattedText>
</p>
```

---

### Opción 2: Usar JSX directamente en los componentes

En lugar de poner HTML en las cadenas de traducción, usa JSX en el componente:

```typescript
// En el archivo de traducción (ej: home.ts)
export const home = {
  title: 'Aprende con los mejores expertos',
  // Mantén el texto simple
};

// En el componente
import { translations } from '@/lib/i18n';

function Component() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <h1>
      Aprende con los <strong>mejores</strong> expertos
    </h1>
  );
}
```

### Opción 2: Usar marcadores especiales y parsearlos

Puedes usar marcadores especiales en las cadenas y crear una función helper para parsearlos:

```typescript
// En el archivo de traducción (ej: home.ts)
export const home = {
  title: 'Aprende con los **mejores** expertos y *profesionales* destacados',
  // Usa ** para negrita y * para cursiva
};

// Crea un helper en src/lib/utils/text-formatting.ts
export function formatText(text: string) {
  const parts: React.ReactNode[] = [];
  let key = 0;
  
  // Regex para encontrar **texto** (negrita) y *texto* (cursiva)
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Añadir texto antes del match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Añadir el texto formateado
    if (match[0].startsWith('**')) {
      // Negrita
      parts.push(<strong key={key++}>{match[2]}</strong>);
    } else {
      // Cursiva
      parts.push(<em key={key++}>{match[3]}</em>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Añadir texto restante
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

// En el componente
import { formatText } from '@/lib/utils/text-formatting';

function Component() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <h1>{formatText(t.home.title)}</h1>;
}
```

### Opción 3: Usar objetos con partes formateadas

Puedes estructurar los textos con objetos que indiquen qué partes tienen formato:

```typescript
// En el archivo de traducción (ej: home.ts)
export const home = {
  title: {
    parts: [
      { text: 'Aprende con los ', format: 'normal' },
      { text: 'mejores', format: 'bold' },
      { text: ' expertos', format: 'normal' },
    ]
  }
};

// En el componente
function Component() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <h1>
      {t.home.title.parts.map((part, i) => {
        if (part.format === 'bold') {
          return <strong key={i}>{part.text}</strong>;
        } else if (part.format === 'italic') {
          return <em key={i}>{part.text}</em>;
        }
        return <span key={i}>{part.text}</span>;
      })}
    </h1>
  );
}
```

### Opción 4: Usar React HTML (no recomendado para seguridad)

Solo si es absolutamente necesario y confías en el contenido:

```typescript
import React from 'react';

function Component() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <div dangerouslySetInnerHTML={{ __html: t.home.title }} />;
}
```

## Recomendación

**Recomendamos la Opción 1** (JSX directamente) porque:
- Es más seguro (no hay riesgo de XSS)
- Es más fácil de mantener
- TypeScript puede verificar los tipos
- Es más flexible para agregar otros elementos (links, imágenes, etc.)

Si necesitas usar el mismo texto formateado en múltiples lugares, considera crear un componente reutilizable:

```typescript
// components/shared/FormattedText.tsx
interface FormattedTextProps {
  children: string;
  boldMarkers?: string[];
  italicMarkers?: string[];
}

export function FormattedText({ children }: FormattedTextProps) {
  // Lógica de formateo aquí
}
```

## Agregar nuevas traducciones

1. Identifica en qué sección debe ir la nueva traducción
2. Abre el archivo correspondiente en `src/lib/i18n/[idioma]/[seccion].ts`
3. Agrega la nueva clave al objeto exportado
4. Repite el proceso para todos los idiomas soportados

## Ejemplo completo con negrita y cursiva

```typescript
// src/lib/i18n/es/home.ts
export const home = {
  hero: {
    main: 'Instituto Mex - Col - Usa',
    // Para usar formato, mantenlo simple aquí
  }
};
```

```tsx
// En tu componente
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/hooks/use-language';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div>
      <h1>
        {t.home.hero.main}
      </h1>
      <p>
        Aprende con los <strong>mejores profesionales</strong> en 
        <em>medicina estética</em>
      </p>
    </div>
  );
}
```

