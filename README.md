# Arib Tawsif Hassan: personal portfolio website

A multi-page personal brand website built with **React, Tailwind CSS, React Router, Framer Motion and Lucide icons**, using Vite as the build tool. It is set up for free hosting on **Netlify**, with no paid services and no custom domain needed.

Pages: Home, About me, Education, Experience, Leadership, Entrepreneurship (The Panenka), Community impact, Skills, Achievements, Currently exploring, Contact.

---

## 1. Run it on your computer (optional)

You need [Node.js](https://nodejs.org) version 18.18 or newer (20 recommended).

```bash
npm install
npm run dev        # live preview at http://localhost:5173
npm run build      # production build into the dist folder
npm run preview    # serve the production build locally
```

---

## 2. Publish for free on Netlify

### Step 1. Get the project onto GitHub

1. Create a free account at [github.com](https://github.com) if you do not have one.
2. Click **New repository**, name it (for example `arib-portfolio`), keep it empty (no README) and create it.
3. Upload this project's files. The easiest route is **uploading files** on the repository page: unzip the project, then drag in **everything inside the folder** (not the folder itself). Do not upload `node_modules` or `dist` if they exist. Commit the upload.

### Step 2. Connect it to Netlify

1. Sign up or log in at [app.netlify.com](https://app.netlify.com). Choosing **Sign up with GitHub** is simplest.
2. Click **Add new project** (older Netlify screens say **Add new site**), then **Import an existing project**, then **GitHub**.
3. Authorize Netlify and pick your repository.
4. Check the build settings. They are read from `netlify.toml`, so they should already be filled in:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**. The first build takes a minute or two.

### Step 3. Get your free address

1. Open the project in Netlify, then go to **Project configuration → General** (older screens: **Site configuration → Site details**) and choose **Change project name** (or **Change site name**).
2. Enter `aribtawsif`. Your address becomes `https://aribtawsif.netlify.app`.
3. If that name is taken, Netlify says so. Try the closest alternative such as `arib-tawsif`, `aribtawsifhassan` or `arib-tawsif-hassan`.
4. Open the address and check every page.

The sitemap, social-sharing previews and canonical links pick up your real address automatically at build time.

### No GitHub? Drag and drop instead

Run `npm install` and `npm run build` on your computer, then drag the generated **`dist`** folder onto the deploy area at [app.netlify.com/drop](https://app.netlify.com/drop). You will repeat this each time you change something.

---

## 3. Replace the placeholders

Everything you need to edit is in a handful of files. After editing on GitHub (use the pencil icon on a file) or on your computer, commit the change and Netlify republishes the site within a minute or two.

### Contact details and social links: `src/data/siteConfig.js`

Fill in the empty quotes:

```js
contact: {
  email: 'you@example.com',
  phone: '+8801XXXXXXXXX',
  whatsapp: '8801XXXXXXXXX',   // country code + number, digits only
},
social: {
  linkedin: 'https://www.linkedin.com/in/your-name',
  facebook: 'https://www.facebook.com/your-page',
  instagram: 'https://www.instagram.com/your-handle',
},
panenka: {
  website: '',                 // The Panenka website, if it has one
  instagram: '',
  facebook: '',
},
```

Until a value is filled in, the site shows a clearly labelled placeholder (a dashed icon or a note). When you have filled in everything you want, set **`showPlaceholderLabels: false`** in the same file. Anything still empty then disappears instead of showing a placeholder.

Also check `siteUrl` in that file. It is only used when building on your own computer; on Netlify the real address is detected automatically.

### Your CV

Replace `public/Arib-Tawsif-Hassan-CV.pdf` with your real CV, keeping the **same file name**. Every Download CV button then serves your file. (The file in the project is a placeholder that says so.)

### Photographs

Put your photos in `src/assets/photos/` using the file names listed in [`src/assets/photos/README.md`](src/assets/photos/README.md): for example `portrait.jpg`, `panenka-products-1.jpg`, `little-lights-of-eid-1.jpg`. They appear automatically, and galleries open in a full-screen viewer. Shrink images before adding them (about 1600 px wide, under 400 KB each) so pages stay fast.

### Wording, dates, qualifications and press links: `src/data/content.js`

All page text lives here. Things you may want to add:

- **Qualification names** for the two schools (`qualification: null` currently shows a placeholder).
- **Media coverage links** for each initiative: add entries to its `mediaLinks` list, for example `{ label: 'Coverage in The Daily Star', url: 'https://…' }`.
- The **"How I approach my work"** wording on the About page is a draft in a neutral voice. Edit it so it sounds like you.

No dates, grades or qualifications were invented. Add them only if you want them shown.

---

## 4. The contact form

The form is wired to **Netlify Forms**, which is free and needs no code. It only works on the deployed Netlify site, not on your own computer. If the message cannot be delivered, the form says so; it never claims to have sent something it did not.

After your first deploy:

1. In Netlify, open the **Forms** tab. You should see a form called `contact`. If it is missing, check that form detection is enabled under **Project configuration → Forms** and trigger a new deploy.
2. Send yourself a test message from the Contact page and confirm it appears under **Forms**.
3. To get an email for each message, go to **Project configuration → Notifications → Form submission notifications** and add your email address.

The free plan limits how many submissions you receive each month. Check Netlify's current pricing page for the exact allowance.

**Prefer another service?** Create a form at [Formspree](https://formspree.io) (or similar), paste its endpoint address into `form.endpoint` in `src/data/siteConfig.js`, and the site will use it instead.

---

## 5. Project structure

```
index.html                 page shell, social-sharing tags, hidden Netlify form
netlify.toml               build settings, page-refresh fallback, security headers
public/                    files served as-is: CV, favicon, share image, _redirects
scripts/postbuild.mjs      writes per-page titles/descriptions, sitemap.xml, robots.txt
src/data/siteConfig.js     contact details, links and switches (edit this first)
src/data/content.js        all page text
src/data/routes.js         page list, titles and descriptions
src/pages/                 one file per page
src/components/layout/     navigation, footer, page header, previous/next links
src/components/ui/         buttons, photo slots, gallery, counters, contact form
src/assets/photos/         your photographs (see the README in that folder)
```

The colour palette (dark green, cream, gold) is defined in `tailwind.config.js` if you ever want to adjust it.

---

## 6. Notes on accuracy and privacy

- The homepage numbers are counted directly from the content on the site (initiatives listed, leadership roles, skill areas, formal awards). They update if you edit the content, and nothing else is claimed.
- The Smart CV Maker role is presented as previous employment, with no dates or duration.
- Beneficiaries are described in respectful language. Please keep it that way if you edit the text, and get permission before publishing photographs of individuals, especially children.
