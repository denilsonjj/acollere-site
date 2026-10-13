/**
 * ACOLLERE CLÍNICA ODONTOLÓGICA
 * JavaScript Puro (Vanilla JS) - Rápido, leve e acessível
 * Codificação: UTF-8
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Atualização do Ano no Rodapé
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Menu Mobile (Drawer / Toggle)
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuToggle && mobileNav) {
    const toggleMenu = () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      mobileNav.setAttribute("aria-hidden", String(!isOpen));

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Fechar ao clicar em qualquer link do menu
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileNav.classList.contains("is-open")) {
          toggleMenu();
        }
      });
    });

    // Fechar ao pressionar a tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  }

  // 3. FAQ Accordion (Perguntas Frequentes)
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isAlreadyActive = item.classList.contains("active");

      // Opcional: fechar outros itens para comportamento de acordeão único
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      if (isAlreadyActive) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // 4. Destaque do Link Ativo na Navegação Desktop por IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 5. Suavização de scroll para links internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 6. Efeito sutil de elevação no Header ao rolar a página
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 20) {
          siteHeader.style.boxShadow = "0 4px 20px rgba(78, 22, 67, 0.08)";
        } else {
          siteHeader.style.boxShadow = "none";
        }
      },
      { passive: true }
    );
  }

  // 7. Formulário de Pré-Agendamento via WhatsApp
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nomeInput = document.getElementById("formNome");
      const turnoSelect = document.getElementById("formTurno");
      const tratamentoSelect = document.getElementById("formTratamento");
      const mensagemTextarea = document.getElementById("formMensagem");

      const nome = nomeInput ? nomeInput.value.trim() : "";
      const turno = turnoSelect ? turnoSelect.value : "";
      const tratamento = tratamentoSelect ? tratamentoSelect.value : "";
      const mensagem = mensagemTextarea ? mensagemTextarea.value.trim() : "";

      if (!nome) {
        if (nomeInput) nomeInput.focus();
        return;
      }

      if (!turno) {
        if (turnoSelect) turnoSelect.focus();
        return;
      }

      if (!tratamento) {
        if (tratamentoSelect) tratamentoSelect.focus();
        return;
      }

      // Mensagem organizada e polida para o WhatsApp (sem emojis, conforme diretriz)
      let texto = "Olá, Dra. Samanta Viki e equipe da Acollere!\n";
      texto += "Gostaria de solicitar um agendamento:\n\n";
      texto += `*Nome:* ${nome}\n`;
      texto += `*Turno de preferência:* ${turno}\n`;
      texto += `*Tratamento de interesse:* ${tratamento}\n`;

      if (mensagem) {
        texto += `*Mensagem:* ${mensagem}\n`;
      }

      texto += "\nVim pelo site e gostaria de verificar os horários disponíveis!";

      const telefone = "5517996618374";
      const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

      window.open(whatsappUrl, "_blank");
    });
  }

  // 8. Efeito de Entrada Pelas Laterais (Formulário & Localização ao Rolar)
  const appointmentGrid = document.querySelector(".appointment-grid");
  if (appointmentGrid) {
    if ("IntersectionObserver" in window) {
      appointmentGrid.classList.add("reveal-ready");

      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              appointmentGrid.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.12,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      revealObserver.observe(appointmentGrid);
    } else {
      appointmentGrid.classList.add("is-visible");
    }
  }

  // 9. Foco no primeiro campo do formulário ao clicar em CTAs de agendamento
  document.querySelectorAll('a[href="#agendamento"]').forEach((cta) => {
    cta.addEventListener("click", () => {
      if (appointmentGrid) {
        appointmentGrid.classList.add("is-visible");
      }
      setTimeout(() => {
        const nomeInput = document.getElementById("formNome");
        if (nomeInput) nomeInput.focus();
      }, 500);
    });
  });

  // 10. Carrossel de Stories e Depoimentos (Loop Infinito Circular)
  const storiesTrack = document.getElementById("storiesTrack");
  const storyPrev = document.getElementById("storyPrev");
  const storyNext = document.getElementById("storyNext");

  if (storiesTrack && storyPrev && storyNext) {
    const originalCards = Array.from(storiesTrack.querySelectorAll(".story-card"));
    const cardCount = originalCards.length;

    if (cardCount > 0) {
      // Cria clones para permitir rolagem infinita contínua em ambas as direções
      const createClone = (card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        clone.classList.add("is-clone");
        return clone;
      };

      // 1 conjunto antes (Set 0) e 2 conjuntos depois (Set 2 e Set 3)
      const preClones = originalCards.map(createClone);
      preClones.forEach((clone) => storiesTrack.insertBefore(clone, originalCards[0]));

      const postClones1 = originalCards.map(createClone);
      postClones1.forEach((clone) => storiesTrack.appendChild(clone));

      const postClones2 = originalCards.map(createClone);
      postClones2.forEach((clone) => storiesTrack.appendChild(clone));

      // Atualiza a lista com todos os cards (Set 0, Set 1 [original], Set 2, Set 3)
      const allCards = Array.from(storiesTrack.querySelectorAll(".story-card"));

      // Passo de rolagem de um card para o próximo (largura do card + gap)
      const getScrollStep = () => {
        if (allCards.length >= 2) {
          return allCards[1].offsetLeft - allCards[0].offsetLeft;
        }
        return 290;
      };

      // Largura de um ciclo completo de 5 cards
      const getSetWidth = () => {
        if (allCards.length > cardCount) {
          return allCards[cardCount].offsetLeft - allCards[0].offsetLeft;
        }
        return getScrollStep() * cardCount;
      };

      // Posição inicial no primeiro card do conjunto original (Set 1)
      const setInitialPosition = () => {
        const setWidth = getSetWidth();
        if (setWidth > 0) {
          storiesTrack.scrollLeft = setWidth;
        }
      };

      // Normalização silenciosa e invisível para o Set 1
      let isNormalizing = false;
      const normalizePosition = () => {
        if (isNormalizing) return;
        const setWidth = getSetWidth();
        if (setWidth <= 0) return;

        const set1Start = setWidth;
        const set2Start = setWidth * 2;

        // Se o usuário rolou para a direita além do conjunto original (Set 2 ou além)
        if (storiesTrack.scrollLeft >= set2Start) {
          isNormalizing = true;
          storiesTrack.style.scrollSnapType = "none";
          storiesTrack.scrollLeft -= setWidth;
          requestAnimationFrame(() => {
            storiesTrack.style.scrollSnapType = "";
            isNormalizing = false;
          });
        }
        // Se o usuário rolou para a esquerda antes do conjunto original (Set 0)
        else if (storiesTrack.scrollLeft < set1Start) {
          isNormalizing = true;
          storiesTrack.style.scrollSnapType = "none";
          storiesTrack.scrollLeft += setWidth;
          requestAnimationFrame(() => {
            storiesTrack.style.scrollSnapType = "";
            isNormalizing = false;
          });
        }
      };

      // As setas nunca ficam desativadas porque o carrossel é circular infinito
      storyPrev.disabled = false;
      storyNext.disabled = false;

      storyPrev.addEventListener("click", () => {
        const step = getScrollStep();
        storiesTrack.scrollBy({ left: -step, behavior: "smooth" });
      });

      storyNext.addEventListener("click", () => {
        const step = getScrollStep();
        storiesTrack.scrollBy({ left: step, behavior: "smooth" });
      });

      // Detecção de fim de rolagem para ajuste de posição em segundo plano
      let scrollDebounce = null;
      storiesTrack.addEventListener(
        "scroll",
        () => {
          clearTimeout(scrollDebounce);
          scrollDebounce = setTimeout(normalizePosition, 160);
        },
        { passive: true }
      );

      if ("onscrollend" in window) {
        storiesTrack.addEventListener("scrollend", normalizePosition);
      }

      // Definir posição inicial e recalcular em resize
      setInitialPosition();
      requestAnimationFrame(setInitialPosition);
      window.addEventListener("load", setInitialPosition);
      window.addEventListener("resize", () => {
        setInitialPosition();
      }, { passive: true });
    }
  }

  // 11. Modal Lightbox de Visualização dos Stories
  const storyModal = document.getElementById("storyModal");
  const storyModalOverlay = document.getElementById("storyModalOverlay");
  const storyModalClose = document.getElementById("storyModalClose");
  const storyModalImg = document.getElementById("storyModalImg");
  const storyModalTitle = document.getElementById("storyModalTitle");
  const storyModalDesc = document.getElementById("storyModalDesc");
  const storyModalCta = document.getElementById("storyModalCta");

  if (storyModal && storiesTrack) {
    let lastFocusedCard = null;

    const openStoryModal = (card) => {
      lastFocusedCard = card;
      const img = card.getAttribute("data-story-img");
      const title = card.getAttribute("data-story-title");
      const desc = card.getAttribute("data-story-desc");

      if (storyModalImg) {
        storyModalImg.src = img || "";
        storyModalImg.alt = title || "Depoimento ampliado";
      }
      if (storyModalTitle) {
        storyModalTitle.textContent = title || "";
      }
      if (storyModalDesc) {
        storyModalDesc.textContent = desc || "";
      }

      storyModal.classList.add("is-open");
      storyModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      if (storyModalClose) {
        storyModalClose.focus();
      }
    };

    const closeStoryModal = () => {
      storyModal.classList.remove("is-open");
      storyModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";

      if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
        lastFocusedCard.focus();
      }
    };

    // Delegação de evento para funcionar em cards originais e clones
    storiesTrack.addEventListener("click", (e) => {
      const card = e.target.closest(".story-card");
      if (card) {
        openStoryModal(card);
      }
    });

    storiesTrack.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".story-card");
        if (card) {
          e.preventDefault();
          openStoryModal(card);
        }
      }
    });

    if (storyModalClose) {
      storyModalClose.addEventListener("click", closeStoryModal);
    }

    if (storyModalOverlay) {
      storyModalOverlay.addEventListener("click", closeStoryModal);
    }

    if (storyModalCta) {
      storyModalCta.addEventListener("click", () => {
        closeStoryModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && storyModal.classList.contains("is-open")) {
        closeStoryModal();
      }
    });
  }
});
