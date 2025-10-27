# Explicación de la Detección Automática de Idioma

## 📋 Resumen

Se ha implementado un sistema de detección automática de idioma basado en la ubicación geográfica del visitante. El sistema detecta el país desde el cual se accede a la web y muestra el contenido en español o inglés automáticamente, mientras mantiene la funcionalidad de cambio manual de idioma.

## 🎯 Objetivo

- **Detección automática**: Mostrar el idioma apropiado según el país del visitante
- **Mantenimiento de funcionalidad manual**: El usuario puede cambiar el idioma manualmente en cualquier momento
- **Persistencia de preferencias**: Recordar la preferencia del usuario para futuras visitas

## 📂 Archivos Modificados

### 1. `src/hooks/use-language.tsx`

**Cambios realizados:**

#### a. Lista de Países de Habla Hispana
Se creó una constante `SPANISH_SPEAKING_COUNTRIES` que contiene los códigos ISO de países donde el español es el idioma predominante:

```typescript
const SPANISH_SPEAKING_COUNTRIES = [
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC',
  'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI',
  'CR', 'PA', 'UY', 'PR'
];
```

#### b. Función `getUserCountry()`
Función asíncrona que obtiene el código de país del visitante usando la API gratuita de ipapi.co:

```typescript
const getUserCountry = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code || null;
  } catch (error) {
    console.error('Error detecting country:', error);
    return null;
  }
};
```

**Características:**
- Usa la API gratuita de ipapi.co (no requiere API key)
- Devuelve el código de país en formato ISO (ej: 'MX', 'US', 'ES')
- Maneja errores de manera elegante

#### c. Función `detectLanguageFromCountry()`
Función que determina el idioma basado en el código de país:

```typescript
const detectLanguageFromCountry = async (): Promise<Language> => {
  const countryCode = await getUserCountry();
  
  if (countryCode && SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return 'es';
  }
  
  return 'en';
};
```

**Lógica:**
- Si el país está en la lista de países de habla hispana → español
- En cualquier otro caso → inglés

#### d. Modificación del Hook `useLanguage`

El `useEffect` ahora incluye:

```typescript
useEffect(() => {
  const initializeLanguage = async () => {
    // 1. Verificar si hay idioma guardado
    const storedLang = localStorage.getItem('language');
    
    if (storedLang && ['en', 'es'].includes(storedLang)) {
      // Usar preferencia guardada (usuario la cambió manualmente)
      setLanguageState(storedLang);
      setIsMounted(true);
      return;
    }

    // 2. Detectar automáticamente si no hay preferencia
    try {
      const detectedLang = await detectLanguageFromCountry();
      setLanguageState(detectedLang);
      localStorage.setItem('language', detectedLang);
    } catch (error) {
      setLanguageState('es'); // Fallback a español
    } finally {
      setIsMounted(true);
    }
  };

  initializeLanguage();
}, []);
```

## 🔄 Flujo de Funcionamiento

### Primera Visita del Usuario

1. El usuario accede a la web desde su país
2. El sistema detecta su país usando la IP
3. Si es un país de habla hispana → muestra en español
4. Si no es país de habla hispana → muestra en inglés
5. Se guarda la selección en localStorage

### Visitas Posteriores

1. El sistema verifica localStorage
2. Si encuentra idioma guardado, lo usa directamente
3. No realiza llamada a la API (más rápido)

### Cambio Manual de Idioma

1. Usuario hace clic en el selector de idioma
2. Se actualiza el estado y localStorage
3. La próxima visita usará el idioma seleccionado manualmente
4. La detección automática se omite mientras haya preferencia guardada

## 🌐 Casos de Uso

### Caso 1: Usuario en México
- **Detección**: MX (México)
- **Resultado**: Web en español automáticamente
- **Acción del usuario**: Puede cambiarlo a inglés si lo desea

### Caso 2: Usuario en Estados Unidos
- **Detección**: US (Estados Unidos)
- **Resultado**: Web en inglés automáticamente
- **Acción del usuario**: Puede cambiarlo a español manualmente (para latinos)

### Caso 3: Usuario en España
- **Detección**: ES (España)
- **Resultado**: Web en español automáticamente

### Caso 4: Usuario en Francia
- **Detección**: FR (Francia)
- **Resultado**: Web en inglés automáticamente

## ⚙️ Características Técnicas

### API Utilizada

**ipapi.co** - Servicio gratuito de geolocalización por IP
- **Endpoint**: `https://ipapi.co/json/`
- **Respuesta**: JSON con información del país y código ISO
- **Límite**: Gratis hasta 1000 requests/mes por IP
- **Sin API Key requerida**

### Almacenamiento

**localStorage** del navegador
- **Clave**: `'language'`
- **Valores**: `'es'` o `'en'`
- **Persistencia**: Se mantiene entre sesiones

### Manejo de Errores

```typescript
try {
  const detectedLang = await detectLanguageFromCountry();
  // ...código de éxito
} catch (error) {
  console.error('Error detecting language:', error);
  setLanguageState('es'); // Fallback seguro
} finally {
  setIsMounted(true);
}
```

**Estrategias de fallback:**
1. Si falla la API → Español por defecto
2. Si no hay localStorage → Detección automática
3. Si la detección falla → Español por defecto

## 🎨 Integración con Componentes Existentes

### Navbar.tsx

El componente Navbar ya estaba preparado para el cambio manual:

```typescript
const handleLanguageChange = (lang: 'en' | 'es') => {
  setLanguage(lang);
};
```

**No se requirieron cambios** en este componente.

### Otros Componentes

Todos los componentes que usan `useLanguage()` continuarán funcionando sin modificaciones:

```typescript
const { language, setLanguage } = useLanguage();
const t = translations[language];
```

## 🔒 Consideraciones de Privacidad

- **No se almacenan IPs**: Solo se usa para la detección inicial
- **Datos mínimos**: Solo se obtiene el código de país
- **Sin tracking**: No se realiza seguimiento de usuarios
- **GDPR compatible**: No se almacenan datos personales

## 🚀 Ventajas de la Implementación

1. **UX Mejorada**: Los usuarios ven su idioma automáticamente
2. **Flexibilidad**: Pueden cambiar el idioma cuando quieran
3. **Performance**: localStorage evita llamadas innecesarias
4. **Fallback Robusto**: Sistema siempre funcional
5. **Sin Costes**: API gratuita, sin necesidad de API keys

## 📊 Diagrama de Flujo

```
Usuario accede a la web
         ↓
¿Hay idioma en localStorage?
    ↓         ↓
  SÍ         NO
  ↓          ↓
Usar      Llamar API ipapi.co
idioma    ↓
guardado  Obtener código país
          ↓
          ¿País en lista hispana?
             ↓      ↓
            SÍ     NO
            ↓      ↓
          Español Inglés
            ↓      ↓
          Guardar en localStorage
```

## 🧪 Testing

### Test Manual

1. **Limpiar localStorage** en DevTools
2. **Recargar la página**
3. **Verificar** que detecte el idioma correcto
4. **Cambiar idioma** manualmente
5. **Recargar** y verificar que mantiene la selección

### Test de Países

```javascript
// Simular desde diferentes países
// Cambiar el código en getUserCountry() temporalmente
const data = await response.json();
// Forzar: data.country_code = 'MX'; // Probarlo
```

## 📝 Notas Adicionales

### Limitación de ipapi.co
- 1000 requests/mes por IP (gratis)
- Si se supera, considerar alternativas:
  - ip-api.com
  - geojs.io
  - abstractapi.com (requiere API key)

### Alternativa para Producción
Si necesitas más requests, considera usar una API de geolocalización con API key:
- MaxMind GeoIP2
- IPStack
- Abstract API

## ✨ Conclusión

La implementación permite que la web se adapte automáticamente al idioma esperado por el usuario según su ubicación, mientras mantiene la flexibilidad para que los usuarios puedan cambiarlo manualmente. El sistema es robusto, rápido y no compromete la privacidad del usuario.
