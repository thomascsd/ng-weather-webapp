目的
---
為 AI 編碼代理提供能立即生產力的簡明專案知識：架構要點、常用命令、專案慣例與整合點。

快速概覽
---
- 本專案為 Angular 18 應用（PWA 支援）。主要模組位於 `src/app`：
  - `AppModule` (`src/app/app.module.ts`)：根模組，註冊 ServiceWorker。
  - `CoreModule` (`src/app/core`)：放共用服務、`AuthInterceptor`（HTTP 攔截器）與 `HttpClientModule`。
  - `SharedModule` (`src/app/shared`)：Header/Footer 等共用 UI 元件。
  - `WeathersModule` (`src/app/weathers`)：天氣相關頁面與路由（目前為 eager import）。

關鍵檔案與範例
---
- API 與資料流範例：`src/app/core/services/forecast.service.ts`
  - `getDays(lat, lon)` 呼叫 `${environment.apiUrl}/api/forecast/days?lat=...&lon=...`
  - 回傳假設形狀為 `{ data: ForecastDatum[], city_name, lat, lon, timezone, country_code }`，並透過 `toForecastDatums` 加上 `id` 與 city metadata。
- API 根址：`src/environments/environment.ts` / `environment.prod.ts`（目前指向 `https://sparkling-flower-9496.fly.dev`）。
- 權杖與攔截：`src/app/core/services/authInterceptor.ts` 會從 `localStorage` 讀取 key `diarycan-auth-code`，若存在則將 `Authorization: Bearer <token>` 加到 request header。
- 路由：`src/app/weathers/weathers-routing.module.ts` 使用 `RouterModule.forChild` 定義子路由（`/days`, `/location`）。
- UI 元件組與樣式：`src/app/material/material.module.ts` 封裝 Material 模組；`src/app/shared/shared.module.ts` 匯出 Header/Footer。

開發工作流程（可直接執行的命令）
---
- 開發伺服器：`npm start` （等同 `ng serve`）
- 生產建置：`npm run build` （等同 `ng build --configuration production`）
- 單元測試：`npm test` （Karma + Jasmine）
- Lint：`npm run lint`（ESLint + Prettier）
- E2E（如果設定）：`npm run e2e`

專案慣例與注意事項（針對代理）
---
- 模組載入：目前 `WeathersModule` 在 `AppModule` 中直接引入（非 lazy-loaded）。新增大型功能時，請考慮使用 lazy-loading。
- Http 設定混用：`AppModule` 提供 `provideHttpClient(withInterceptorsFromDi())`，而 `CoreModule` 仍 `import HttpClientModule` 並提供 `HTTP_INTERCEPTORS`。不要在無測試或充分理解下重構 HTTP 提供方式。
- API 回傳 shape：`ForecastService` 依賴 `forecast.data` 的存在與欄位（city_name, lat, lon...）；修改後端或 DTO 時要更新 `toForecastDatums` 轉換邏輯與相關 `ForecastDatum` 型別（`src/app/core/models/forecast.model.ts`）。
- PWA：Service worker 只在 `environment.production === true` 時啟用；`ngsw-config.json` 與 `manifest.json` 管理資源與設定。
- Auth token key：本專案使用 `diarycan-auth-code` 作為 localStorage key，搜尋並保持一致。

測試、調試提示
---
- 若修改 HTTP 攔截或 API URL，先用 `npm start` 在開發模式驗證請求與 header。
- 若新增 route/component，確保在 `WeathersRoutingModule` 或 `AppRoutingModule` 正確註冊並重啟 dev server。
- 單元測試使用 Karma/Jasmine，快速執行 `npm test`。

不可做的假設
---
- 不要假設後端回傳會包含額外欄位；以 `forecast.data` 為主流契約。
- 不要移除或更改 `localStorage` key 名稱，除非要同步修改前端/文件與測試。

變更交付建議
---
- 小變更（修正 UI、單一服務）：開分支、提交並執行 `npm test`。
- 涉及 HTTP 層/攔截、PWA 或模組載入策略的大變更：在 PR 描述中附上驗證步驟（如何在本地模擬 token、後端回傳範例），並在 CI 上執行 `npm run build`。

最後
---
若需我整合更多細節（例如範例 API 回傳 JSON、或把 `WeathersModule` 改為 lazy-loading 的建議修改），請告訴我想要我做的下一步。
