# 평판 쿠에트 유동 저항력 계산기

평행한 두 판 사이의 선형 속도분포로부터 이동판 한 면의 점성 저항력 크기를 계산합니다.

- ID: E137
- App: https://nanalab.kr/eng-couette-force/
- Repository: https://github.com/NaNaCompany/eng-couette-force
- Formula: F = μAV / h

## Model and data

정상 층류의 비압축성 뉴턴 유체이며 한 판은 정지하고 다른 판은 일정 속력으로 움직입니다. 압력 구배·벽면 미끄럼·가장자리 효과를 무시하고 점성계수는 일정합니다. 결과는 이동 방향의 반대쪽으로 작용하는 힘의 크기입니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
