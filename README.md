## ✨급PAY

![readme-title](https://github.com/user-attachments/assets/e0642e4b-6d5f-4129-bd27-81d13dd597fd)


급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스

### 배포 링크 : https://gheup-pay-project.vercel.app/

### 발표 자료 링크 : [급페이](https://acrobat.adobe.com/id/urn:aaid:sc:AP:6fd829b2-a357-4e28-aa7e-24a83e50c702)

## 📍개발 기간

2024-06-20~2024-07-07 ( 약 2주 )

## 📍프로젝트 소개

**사장님**

- 공고등록:  내 가게를 등록하고, 여러 개의 공고를 등록해보세요.
- 즉시채용: 일손이 급한 시기 더 높은 시급으로 빠르게 알바생을 모집하세요.
- 간편 신청 관리: 아르바이트생의 지원 현황을 한눈에 확인하고, 쉽게 관리할 수 있습니다.

**알바님**

- 높은시급: 급하게 필요한 일손에 더 높은 시급을 제공받으세요.
- 다양한 선택: 다양한 일자리를 검색과 필터링을 통해 쉽게 찾아보고, 나에게 맞는 일자리를 선택하세요.
- 즉시 지원: 빠르고 간편한 지원절차로 원하는 일자리에 즉시 지원할 수 있습니다.

## 📍깃 브랜치 전략

**1) 브랜치 전략**

- 이슈만들고, 이슈 토대로 브랜치 파기
- 기능에 따른 브랜치 타입명 붙이기
예) feat/12, refactor/158

**2) 코드리뷰**

- 팀원들이 올린 코드는 꼭! 보고, 리뷰하기
- 2명 승인 후, squash and merge하기

## 📍팀원 소개
<div align="center" style="text-align: center">

  | <img src="https://avatars.githubusercontent.com/u/88658551?v=4" height=100> <br/> @Kbomi16 | <img src="https://avatars.githubusercontent.com/u/86544979?v=4" height=100> <br/> @codefug | <img src="https://avatars.githubusercontent.com/u/105118884?v=4" height=100> <br/>@Sparrowlim | <img src="https://avatars.githubusercontent.com/u/86304360?v=4" height=100> <br/> @jaychae | <img src="https://avatars.githubusercontent.com/u/122506809?v=4" height=100> <br/>@hongseoha |
| :---: | :---: | :---: | :---: | :---: |
| 김보미 | 이승현 | 임진조 | 채종민 | 홍서하 |

</div>

## 📍기술 스택

![image](https://github.com/902z/gheupPAY/assets/86544979/06f79044-d58f-4a3f-9397-0eba92a1d964)

## 📍폴더 구조

```structure
├───app
│   │   error.tsx
│   │   layout.tsx
│   │   not-found.tsx
│   │   page.tsx
│   │
│   ├───(route)
│   │   ├───(alba)
│   │   │   │   layout.tsx
│   │   │   │
│   │   │   ├───@modal
│   │   │   │   │   default.tsx
│   │   │   │   │
│   │   │   │   ├───(.)profile-edit
│   │   │   │   │       error.tsx
│   │   │   │   │       layout.tsx
│   │   │   │   │       page.tsx
│   │   │   │   │
│   │   │   │   └───(.)profile-register
│   │   │   │           error.tsx
│   │   │   │           layout.tsx
│   │   │   │           page.tsx
│   │   │   │
│   │   │   ├───notice-detail
│   │   │   │   ├───[shop_id]
│   │   │   │   │   └───[notice_id]
│   │   │   │   │           error.tsx
│   │   │   │   │           layout.tsx
│   │   │   │   │           page.tsx
│   │   │   │   │
│   │   │   │   └───_components
│   │   │   │       └───recent-notices
│   │   │   │               index.tsx
│   │   │   │
│   │   │   ├───notice-list
│   │   │   │   │   error.tsx
│   │   │   │   │   layout.tsx
│   │   │   │   │   page.tsx
│   │   │   │   │
│   │   │   │   └───_components
│   │   │   │       ├───customized-notice
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       ├───filter
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       ├───need-login-section
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       └───need-profile-section
│   │   │   │               index.tsx
│   │   │   │
│   │   │   ├───profile-detail
│   │   │   │   │   error.tsx
│   │   │   │   │   layout.tsx
│   │   │   │   │   page.tsx
│   │   │   │   │
│   │   │   │   └───_components
│   │   │   │       ├───alba-status-label
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       ├───none-application
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       ├───none-profile
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       ├───notice-application-table
│   │   │   │       │       index.tsx
│   │   │   │       │
│   │   │   │       └───user-profile
│   │   │   │               index.tsx
│   │   │   │
│   │   │   ├───profile-edit
│   │   │   │       error.tsx
│   │   │   │       layout.tsx
│   │   │   │       page.tsx
│   │   │   │
│   │   │   └───profile-register
│   │   │       │   error.tsx
│   │   │       │   layout.tsx
│   │   │       │   page.tsx
│   │   │       │
│   │   │       └───_components
│   │   │               form.tsx
│   │   │               schema.ts
│   │   │
│   │   ├───(login)
│   │   │   │   error.tsx
│   │   │   │   layout.tsx
│   │   │   │   schema.ts
│   │   │   │
│   │   │   ├───login
│   │   │   │       login-form.tsx
│   │   │   │       page.tsx
│   │   │   │
│   │   │   └───signup
│   │   │       │   page.tsx
│   │   │       │   sign-up-from.tsx
│   │   │       │
│   │   │       └───_components
│   │   │           ├───user-type-radio
│   │   │           │       index.tsx
│   │   │           │
│   │   │           └───user-type-select
│   │   │                   index.tsx
│   │   │
│   │   └───admin
│   │       │   layout.tsx
│   │       │
│   │       ├───@modal
│   │       │   │   default.tsx
│   │       │   │
│   │       │   ├───(.)notice-create
│   │       │   │   │   error.tsx
│   │       │   │   │   layout.tsx
│   │       │   │   │   page.tsx
│   │       │   │   │   schema.ts
│   │       │   │   │
│   │       │   │   └───_components
│   │       │   │           index.tsx
│   │       │   │           schema.ts
│   │       │   │
│   │       │   ├───(.)notice-edit
│   │       │   │   └───[shop_id]
│   │       │   │       └───[notice_id]
│   │       │   │               error.tsx
│   │       │   │               layout.tsx
│   │       │   │               page.tsx
│   │       │   │
│   │       │   ├───(.)shop-create
│   │       │   │       error.tsx
│   │       │   │       layout.tsx
│   │       │   │       page.tsx
│   │       │   │
│   │       │   └───(.)shop-edit
│   │       │           error.tsx
│   │       │           layout.tsx
│   │       │           page.tsx
│   │       │
│   │       ├───notice-create
│   │       │       error.tsx
│   │       │       layout.tsx
│   │       │       page.tsx
│   │       │       schema.ts
│   │       │
│   │       ├───notice-detail
│   │       │   ├───[shop_id]
│   │       │   │   └───[notice_id]
│   │       │   │           error.tsx
│   │       │   │           layout.tsx
│   │       │   │           page.tsx
│   │       │   │
│   │       │   └───_components
│   │       │       ├───alba-application-table
│   │       │       │       index.tsx
│   │       │       │
│   │       │       └───status-label
│   │       │               index.tsx
│   │       │
│   │       ├───notice-edit
│   │       │   └───[shop_id]
│   │       │       └───[notice_id]
│   │       │               error.tsx
│   │       │               layout.tsx
│   │       │               page.tsx
│   │       │
│   │       ├───shop-create
│   │       │       error.tsx
│   │       │       layout.tsx
│   │       │       page.tsx
│   │       │       schema.ts
│   │       │       shop-create-form.tsx
│   │       │
│   │       ├───shop-detail
│   │       │   │   error.tsx
│   │       │   │   layout.tsx
│   │       │   │   page.tsx
│   │       │   │
│   │       │   └───_components
│   │       │       ├───is-register-component
│   │       │       │       index.tsx
│   │       │       │
│   │       │       ├───my-shop-detail-card
│   │       │       │       index.tsx
│   │       │       │
│   │       │       ├───none-notice
│   │       │       │       index.tsx
│   │       │       │
│   │       │       └───posted-notice
│   │       │               index.tsx
│   │       │
│   │       └───shop-edit
│   │               error.tsx
│   │               layout.tsx
│   │               page.tsx
│   │               schema.ts
│   │               shop-edit-form.tsx
│   │
│   ├───_actions
│   │       index.ts
│   │
│   ├───_apis
│   │   ├───alert
│   │   │       index.ts
│   │   │
│   │   ├───application
│   │   │       index.ts
│   │   │
│   │   ├───authentication
│   │   │       index.ts
│   │   │
│   │   ├───image
│   │   │       index.ts
│   │   │
│   │   ├───notice
│   │   │       index.ts
│   │   │
│   │   ├───shop
│   │   │       index.ts
│   │   │
│   │   ├───type
│   │   │       index.ts
│   │   │
│   │   └───user
│   │           index.ts
│   │
│   ├───_components
│   │   ├───action-button
│   │   │       index.tsx
│   │   │
│   │   ├───blind-component
│   │   │       index.tsx
│   │   │
│   │   ├───button
│   │   │       index.tsx
│   │   │
│   │   ├───custom-date-input
│   │   │       index.tsx
│   │   │
│   │   ├───custom-form-dropdown
│   │   │       index.tsx
│   │   │
│   │   ├───custom-price-input
│   │   │       index.tsx
│   │   │
│   │   ├───custom-text-input
│   │   │       index.tsx
│   │   │
│   │   ├───custom-textarea
│   │   │       index.tsx
│   │   │
│   │   ├───custom-time-input
│   │   │       index.tsx
│   │   │
│   │   ├───error-sign
│   │   │       index.tsx
│   │   │
│   │   ├───footer
│   │   │       index.tsx
│   │   │
│   │   ├───form-dropdown
│   │   │       index.tsx
│   │   │
│   │   ├───header
│   │   │   │   index.tsx
│   │   │   │
│   │   │   └───_component
│   │   │       │   header-login.tsx
│   │   │       │   header-not-login.tsx
│   │   │       │   logout-button.tsx
│   │   │       │   search.tsx
│   │   │       │
│   │   │       └───_component
│   │   │           └───alert
│   │   │                   alert-card.tsx
│   │   │                   alert-component.tsx
│   │   │                   index.tsx
│   │   │
│   │   ├───interception-area
│   │   │       index.tsx
│   │   │
│   │   ├───label-hourly-rate
│   │   │       index.tsx
│   │   │
│   │   ├───label-status
│   │   │       index.tsx
│   │   │
│   │   ├───list-card
│   │   │       index.tsx
│   │   │
│   │   ├───loading
│   │   │       loading.tsx
│   │   │
│   │   ├───modals
│   │   │   │   index.tsx
│   │   │   │
│   │   │   └───_components
│   │   │           confirm-modal.tsx
│   │   │           select-modal.tsx
│   │   │           warning-modal.tsx
│   │   │           window-modal.tsx
│   │   │
│   │   ├───none-sign-button
│   │   │       index.tsx
│   │   │
│   │   ├───notice-card
│   │   │   │   index.tsx
│   │   │   │
│   │   │   └───_component
│   │   │           skeleton.tsx
│   │   │
│   │   ├───notice-detail-card
│   │   │   │   index.tsx
│   │   │   │
│   │   │   └───_component
│   │   │           notice-detail-card-skeleton.tsx
│   │   │           register-button.tsx
│   │   │
│   │   ├───notice-list
│   │   │   │   index.tsx
│   │   │   │
│   │   │   └───_component
│   │   │           sort-drop-down.tsx
│   │   │
│   │   ├───only-label-hourly-rate
│   │   │       index.tsx
│   │   │
│   │   ├───page-modal
│   │   │       index.tsx
│   │   │
│   │   ├───pagination
│   │   │       index.tsx
│   │   │
│   │   ├───table
│   │   │       index.tsx
│   │   │
│   │   └───toast
│   │           toastProvider.tsx
│   │
│   ├───_constants
│   │       address.ts
│   │       category.ts
│   │       error-message.ts
│   │       hourly-wage.ts
│   │       user-type.ts
│   │       validation-text.ts
│   │
│   ├───_hooks
│   │       use-check-login-status.ts
│   │       use-modal.ts
│   │       use-outside-click.ts
│   │
│   ├───_lib
│   │       axios.ts
│   │
│   └───_util
│           calculate-date-diff.ts
│           calculate-time-range.ts
│           calculate-wage-percentage .ts
│           cookie.ts
│           date-format.ts
│           format-date-tiem-local.ts
│           get-now.ts
│           get-thirty-minutes-later.ts
│           notice.ts
│           notification.ts
│           number-format.ts
│           number-with-comma.ts
│           time-difference-from-now.ts
│
├───public
│   ├───fonts
│   ├───icons
│   └───images
│
└───styles
        globals.css
```

## 📍트러블 슈팅

[https://marbled-pony-2be.notion.site/5ec8a24a8f0c4e2da3ad528c481930bc?pvs=4](https://www.notion.so/5ec8a24a8f0c4e2da3ad528c481930bc?pvs=21)
