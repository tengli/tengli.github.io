# Bilingual content guide

The site uses English as the default language and Chinese under `/zh/`.

```text
English: /
Chinese: /zh/
```

No third-party internationalisation package is required. Astro handles the
locale-aware routes, while shared page components keep the layout and behaviour
in one place.

## Content folders

Store each language in its own folder and use the same filename for translated
versions:

```text
src/content/articles/en/my-article.md
src/content/articles/zh/my-article.md

src/content/shows/en/my-episode.md
src/content/shows/zh/my-episode.md

src/content/projects/en/my-project.md
src/content/projects/zh/my-project.md
```

The shared filename is the translation key. For example, both article files
above produce these pages:

```text
/articles/my-article/
/zh/articles/my-article/
```

## Required frontmatter

Every entry must include its language:

```yaml
locale: en
```

or:

```yaml
locale: zh
```

Categories, show types and project statuses use stable internal values so that
the interface can translate their labels automatically.

### Article categories

```text
ai-tech
learning-development
society-culture
history-cities
australia-life
```

### Show types

```text
podcast
video
audio
```

### Project statuses

```text
planning
building
maintaining
completed
paused
```

## Gradual translation workflow

1. Keep the original Chinese file in the appropriate `zh/` folder.
2. Copy it to the matching `en/` folder with the same filename.
3. Change `locale` to `en` and translate the title, description, tags and body.
4. Keep dates, URLs, technical metadata and the filename aligned unless there
   is a reason to change them.
5. Run `npm run build` before publishing.

It is valid to publish only one language first. When a translated counterpart
does not exist, the language switch on that detail page goes to the other
language's collection page instead of a missing URL.

## Adding interface translations

Navigation labels, page introductions, category names and common actions live
in `src/i18n/config.ts`. Add reusable interface wording there instead of placing
language-specific text directly inside shared components.
