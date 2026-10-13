# Acollere Clínica Odontológica - Front-end Web

Front-end leve, de alta performance e responsivo, desenvolvido em HTML5, CSS3 e JavaScript puro para a **Acollere Clínica Odontológica**, sob a coordenação da **Dra. Samanta Viki**, localizada na **Avenida José Henrique Duarte, 326 - Jardim Santa Catarina**, em São José do Rio Preto - SP.

Projetado especificamente para receber visitantes vindos do **Link da Bio (Instagram)** e do **Google Meu Negócio (Google Maps)**, com foco em agilidade, clareza e agendamento direto pelo WhatsApp.

---

## 📁 Estrutura de Arquivos

```text
acollere-site/
├── index.html                     # Estrutura HTML5 semântica (UTF-8, ícones 100% SVG, sem emojis, SEO local)
├── styles.css                     # Estilos modernos, paleta roxo da marca (#c40775) + branco violeta, sem frameworks
├── script.js                      # JavaScript puro para menu mobile, acordeão de FAQ e rolagem suave
├── assets/
│   └── images/
│       ├── logo.png               # Logo oficial em alta resolução
│       ├── logo.svg               # Logo em vetor SVG escalável
│       ├── logo-icon.png          # Símbolo da marca recortado
│       ├── favicon.png            # Favicon para abas e navegadores
│       ├── dra-samanta-viki.webp  # Foto profissional da Dra. Samanta no consultório (WebP + JPG)
│       ├── recepcao-clinica.webp  # Foto da recepção e lounge contemporâneo
│       └── clinica-lounge-cafe.webp # Foto do espaço café e jardim interno
└── README.md                      # Documentação e instruções de publicação
```

---

## 🎨 Identidade Visual e Paleta de Cores

- **Cor Primária da Logo (Roxo / Magenta vibrante):** `#c40775`
- **Fundo / Superfícies:** `#faf7fc` (branco sutilmente puxado para o violeta) e `#ffffff`
- **Tons Escuros e Tipografia:** `#221424` (alto contraste, acessibilidade WCAG AAA)
- **WhatsApp Oficial:** `#25d366`
- **Ícones:** 100% vetorizados em SVG inline, garantindo renderização nítida em qualquer densidade de pixels.

---

## 📍 Informações e Funcionalidades

- **Profissional:** Dra. Samanta Viki (Cirurgiã-Dentista)
- **Especialidades & Atuação:**
  - **Implante Dentário Unitário** (reposição individual dente a dente)
  - **Protocolo sobre Implantes** (implante total / reabilitação completa fixa)
  - **Facetas Dentais** (lentes e lâminas estéticas de alta precisão)
  - **Clínico Geral & Prevenção** (profilaxia ultrassom, restaurações estéticas, check-up preventivo)
- **Endereço:** Avenida José Henrique Duarte, 326 - Jardim Santa Catarina, São José do Rio Preto - SP, CEP 15080-200
- **Navegação do Site:** Início &bull; Nossos Serviços &bull; Espaço &bull; FAQ &bull; Agendar Consulta
- **Formulário de Pré-Agendamento:** Coleta Nome, Turno preferido, Tratamento de interesse e Mensagem, enviando tudo perfeitamente estruturado para o WhatsApp da clínica.
- **Localização Integrada:** Mapa compacto e organizado no layout ao lado do formulário + botões diretos de rota para Google Maps e Waze.
- **Animação de Entrada Lateral:** Efeito cinematográfico suave com aceleração e desaceleração natural (`cubic-bezier`), onde o formulário desliza da esquerda e a localização da direita convergindo harmoniosamente ao centro no momento em que a seção entra no campo de visão.

---

## 🚀 Como Visualizar Localmente

Abra o arquivo [index.html](file:///C:/Users/Usuário/.gemini/antigravity/scratch/acollere-site/index.html) no navegador ou inicie o servidor local:

```bash
cd "C:\Users\Usuário\.gemini\antigravity\scratch\acollere-site"
python -m http.server 8080
```
Acesse `http://localhost:8080`.
