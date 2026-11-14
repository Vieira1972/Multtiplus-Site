# Content Editing Guide

This guide explains how to edit text content on the Multtiplus website. All text is managed through "Internationalization" (i18n) files, allowing for easy translation and updates without touching the code.

## 📂 Where are the texts?

The text files are located in: `src/i18n/locales/`

*   🇧🇷 **Portuguese:** `pt-BR.json`
*   🇺🇸 **English:** `en.json`
*   🇪🇸 **Spanish:** `es.json`

To change text, simply edit the value inside the quotes for the corresponding key in these JSON files.

---

## 📝 Section by Section Guide

### 1. Header (Navigation & CTA)
*   **Brand Name:** `header.brandName`
*   **Navigation:**
    *   `header.nav.home`
    *   `header.nav.services`
    *   `header.nav.partners`
    *   `header.nav.about`
    *   `header.nav.contact`
*   **Button:** `header.cta`

### 2. Hero (Top Section)
*   **Badge:** `hero.badge`
*   **Title:**
    *   `hero.title.line1` (First part)
    *   `hero.title.highlight` (Highlighted teal text)
*   **Subtitle:** `hero.subtitle`
*   **Buttons:**
    *   `hero.ctaPrimary` (Main action)
    *   `hero.ctaSecondary` (Secondary action)

### 3. Services
*   **Kicker (Small top label):** `services.kicker`
*   **Main Title:** `services.title`
*   **Subtitle:** `services.subtitle`
*   **Service Items:**
    *   Item 1: `services.items.0.title`, `services.items.0.description`
    *   Item 2: `services.items.1.title`, `services.items.1.description`
    *   ... up to Item 5

### 4. Partners
*   **Kicker:** `partners.kicker`
*   **Title:** `partners.title`
*   **Subtitle:** `partners.subtitle`
*   **Note:** `partners.note` (Optional text)
*   **Partner Names:** `partners.items.p1`, `partners.items.p2`, etc.

### 5. About
*   **Title:** `about.title`
*   **Body Text:** `about.body`
*   **Bullet Points:**
    *   `about.bullets.0`
    *   `about.bullets.1`
    *   `about.bullets.2`
    *   `about.bullets.3`
*   **Button:** `about.cta`

### 6. Contact
*   **Kicker:** `contact.kicker`
*   **Title:** `contact.title`
*   **Subtitle:** `contact.subtitle`
*   **Info Labels:**
    *   `contact.info.emailLabel`
    *   `contact.info.phoneLabel`
    *   `contact.info.addressLabel`
*   **Form Field Labels:**
    *   `contact.form.name`
    *   `contact.form.company`
    *   `contact.form.email`
    *   `contact.form.phone`
    *   `contact.form.message`
*   **Buttons & Messages:**
    *   `contact.form.submit`
    *   `contact.form.successTitle`
    *   `contact.form.successMessage`

### 7. Footer
*   **Tagline:** `footer.tagline`
*   **Section Titles:**
    *   `footer.quickLinksTitle`
    *   `footer.servicesTitle` (if used)
    *   `footer.contactTitle`
*   **Legal Links:**
    *   `footer.privacy`
    *   `footer.terms`
*   **Copyright:** `footer.copyright`

---

## ⚠️ Important Rules

1.  **Do not change the specific "keys"** (the text on the left side, e.g., `"header.nav.home"`). Only change the **value** on the right side.
2.  **Preserve quotes:** Ensure the text is always inside double quotes `""`.
3.  **No Trailing Commas:** In JSON, the *last* item in a list or object should NOT have a comma after it.
4.  **Special Characters:** If you need to use a double quote inside the text, escape it like this: `\"`.
