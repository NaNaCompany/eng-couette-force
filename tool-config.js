export const tool={
  "category": "유체역학",
  "category_en": "Fluid mechanics",
  "id": "E137",
  "slug": "eng-couette-force",
  "title": "평판 쿠에트 유동 저항력 계산기",
  "title_en": "Plane Couette Flow Drag Force Calculator",
  "fields": [
    {
      "key": "mu",
      "label": "동점성계수가 아닌 점성계수 μ",
      "label_en": "Dynamic viscosity μ",
      "dimension": "viscosity",
      "example": 0.1,
      "constraint": "positive",
      "display_unit": "Pas",
      "display_value": "0.10000000000000001"
    },
    {
      "key": "area",
      "label": "한쪽 판의 젖은 면적",
      "label_en": "Wetted area on one face of the plate",
      "dimension": "area",
      "example": 0.2,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "0.20000000000000001"
    },
    {
      "key": "v",
      "label": "정지판에 대한 이동판 속력",
      "label_en": "Moving-plate speed relative to the stationary plate",
      "dimension": "speed",
      "example": 1,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "1"
    },
    {
      "key": "gap",
      "label": "두 판 사이 수직 간격",
      "label_en": "Normal separation between the plates",
      "dimension": "length",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "1"
    }
  ],
  "result_label": "이동판 점성 저항력 크기",
  "result_label_en": "Viscous drag-force magnitude on the moving plate",
  "result_dimension": "force",
  "formula": "F = μAV / h",
  "purpose": "평행한 두 판 사이의 선형 속도분포로부터 이동판 한 면의 점성 저항력 크기를 계산합니다.",
  "purpose_en": "Calculate the viscous drag-force magnitude on one face of a moving plate from the linear velocity profile between parallel plates.",
  "assumptions": "정상 층류의 비압축성 뉴턴 유체이며 한 판은 정지하고 다른 판은 일정 속력으로 움직입니다. 압력 구배·벽면 미끄럼·가장자리 효과를 무시하고 점성계수는 일정합니다. 결과는 이동 방향의 반대쪽으로 작용하는 힘의 크기입니다.",
  "assumptions_en": "Required: steady laminar incompressible Newtonian flow with one stationary plate, one steadily moving plate, and constant dynamic viscosity. Excluded: pressure gradient, wall slip and edge effects. The result is the magnitude of drag opposing plate motion.",
  "sources": [
    {
      "label": "MIT: Couette flow and plate shear",
      "url": "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter28.pdf"
    }
  ],
  "condition": "압력 구배가 없는 정상 층류와 점성계수 μ를 확인했습니다.",
  "condition_en": "I confirmed steady laminar flow without a pressure gradient and dynamic viscosity μ.",
  "site": "https://nanalab.kr/eng-couette-force/",
  "repository": "https://github.com/NaNaCompany/eng-couette-force",
  "groups": [],
  "output_unit": "N"
};
