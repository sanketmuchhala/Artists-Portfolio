/**
 * Briannon Sullivan Portfolio
 * Main JavaScript - Vanilla JS only
 * Features: Lazy loading, lightbox, filters, keyboard navigation
 */

(function() {
  'use strict';

  // ============================================
  // Lazy Loading Images (with IntersectionObserver fallback)
  // ============================================

  function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback: load all images immediately
      images.forEach(img => img.classList.add('loaded'));
    }
  }

  // ============================================
  // Lightbox for Work Detail Images
  // ============================================

  function initLightbox() {
    const workImage = document.querySelector('.work-image');
    if (!workImage) return;

    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image lightbox');

    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox-content';

    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    lightboxImage.alt = workImage.alt;

    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Close lightbox');

    lightboxContent.appendChild(closeButton);
    lightboxContent.appendChild(lightboxImage);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);

    // Open lightbox
    workImage.style.cursor = 'pointer';
    workImage.addEventListener('click', () => {
      lightboxImage.src = workImage.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      workImage.focus();
    }

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('active') && e.key === 'Escape') {
        closeLightbox();
      }
    });

    // Trap focus in lightbox
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        closeButton.focus();
      }
    });
  }

  // ============================================
  // Work Filters (Progressive Enhancement)
  // ============================================

  function initFilters() {
    const filtersContainer = document.querySelector('.filters');
    if (!filtersContainer) return;

    const filterSelects = filtersContainer.querySelectorAll('.filter-select');
    const resetButton = document.getElementById('reset-filters');
    const workCards = document.querySelectorAll('.work-card');

    if (workCards.length === 0) return;

    // Filter function
    function filterWorks() {
      const activeFilters = {
        series: document.getElementById('filter-series')?.value || '',
        year: document.getElementById('filter-year')?.value || '',
        medium: document.getElementById('filter-medium')?.value || ''
      };

      let visibleCount = 0;

      workCards.forEach(card => {
        const link = card.querySelector('.work-card-link');
        if (!link) return;

        // Extract data from card content
        const cardData = {
          series: extractDataFromCard(card, 'Series'),
          year: extractDataFromCard(card, 'Year'),
          medium: extractDataFromCard(card, 'Medium')
        };

        // Check if card matches all active filters
        const matchesSeries = !activeFilters.series ||
                             cardData.series.includes(activeFilters.series);
        const matchesYear = !activeFilters.year ||
                           cardData.year.includes(activeFilters.year);
        const matchesMedium = !activeFilters.medium ||
                             cardData.medium.toLowerCase().includes(activeFilters.medium.toLowerCase());

        if (matchesSeries && matchesYear && matchesMedium) {
          card.removeAttribute('hidden');
          visibleCount++;
        } else {
          card.setAttribute('hidden', '');
        }
      });

      // Show/hide reset button
      const hasActiveFilters = activeFilters.series || activeFilters.year || activeFilters.medium;
      resetButton.style.opacity = hasActiveFilters ? '1' : '0.5';
    }

    // Extract data from card (fallback method)
    function extractDataFromCard(card, label) {
      const link = card.querySelector('.work-card-link');
      if (!link) return '';

      // Try to get from URL or data attributes
      const href = link.getAttribute('href') || '';
      return href;
    }

    // Add change listeners
    filterSelects.forEach(select => {
      select.addEventListener('change', filterWorks);
    });

    // Reset filters
    resetButton.addEventListener('click', () => {
      filterSelects.forEach(select => {
        select.value = '';
      });
      filterWorks();
    });

    // Initialize reset button state
    resetButton.style.opacity = '0.5';
  }

  // ============================================
  // Smooth Scroll (for anchor links)
  // ============================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================

  function initKeyboardNav() {
    // Add keyboard navigation for work grid
    const workCards = document.querySelectorAll('.work-card-link');

    workCards.forEach((card, index) => {
      card.addEventListener('keydown', (e) => {
        let targetIndex;

        switch(e.key) {
          case 'ArrowRight':
            e.preventDefault();
            targetIndex = index + 1;
            break;
          case 'ArrowLeft':
            e.preventDefault();
            targetIndex = index - 1;
            break;
          case 'ArrowDown':
            e.preventDefault();
            // Calculate grid columns based on viewport
            const columns = getGridColumns();
            targetIndex = index + columns;
            break;
          case 'ArrowUp':
            e.preventDefault();
            const cols = getGridColumns();
            targetIndex = index - cols;
            break;
          default:
            return;
        }

        if (targetIndex >= 0 && targetIndex < workCards.length) {
          workCards[targetIndex].focus();
        }
      });
    });
  }

  // Helper: Calculate grid columns
  function getGridColumns() {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  // ============================================
  // Image Fade-in on Load
  // ============================================

  function initImageFadeIn() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
      }
    });
  }

  // ============================================
  // External Links (open in new tab)
  // ============================================

  function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
      const href = link.getAttribute('href');
      const isExternal = !href.includes(window.location.hostname);

      if (isExternal && !link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // ============================================
  // Initialize All Features
  // ============================================

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    initLazyLoading();
    initLightbox();
    initFilters();
    initSmoothScroll();
    initKeyboardNav();
    initImageFadeIn();
    initExternalLinks();
  }

  // Run initialization
  init();

})();
