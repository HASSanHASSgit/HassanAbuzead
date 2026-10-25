# HassanAbuzead — وكيل ذكي بسيط

وكيل ذكي مبني على [Claude Agent SDK](https://www.npmjs.com/package/@anthropic-ai/claude-agent-sdk)، يستقبل سؤالك ويجيب عنه باللغة العربية.

## المتطلبات

- Node.js 18 أو أحدث
- مفتاح Anthropic API

## التثبيت

```bash
npm install
```

## الإعداد

ضع مفتاحك في متغير البيئة (لا تكتبه داخل ملفات المشروع):

```bash
export ANTHROPIC_API_KEY="مفتاحك هنا"
```

## التشغيل

```bash
npm start -- "ما هي عاصمة الأردن؟"
```

بدون سؤال، سيعرّف الوكيل بنفسه.
