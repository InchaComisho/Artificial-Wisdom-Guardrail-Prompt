const DISCUSSIONS_URL = "https://github.com/InchaComisho/Artificial-Wisdom-Guardrail-Protocol/discussions";

const prompts = {
  ja: {
    appTitle: "人工叡智ガードレールプロンプト",
    notice: "ページ本文は読み込みません。外部送信もしません。表示されている人工叡智ガードレールプロンプトだけをコピーします。",
    languageTitle: "言語",
    languageInfo: "Autoはブラウザ言語で自動判定します。現在のブラウザ言語: ",
    previewTitle: "コピーされる内容のプレビュー",
    copyPrompt: "プレビュー内容をコピー",
    discussionTitle: "テスト結果・議論",
    openDiscussions: "GitHub Discussions を開く",
    privacyTitle: "安全設計",
    ready: "準備完了。",
    copied: "人工叡智ガードレールプロンプトをコピーしました。任意でAIの入力欄に貼り付けてください。",
    copyFailed: "コピーに失敗しました: ",
    privacyList: [
      "ページ本文を読みません。",
      "左メニュー、広告、サイドバーも取得しません。",
      "外部AIへ自動送信しません。",
      "AI APIは使いません。",
      "ユーザーがコピーして任意で貼り付ける方式です。"
    ],
    prompt: `このタスクを実行する前に、人工叡智ガードレールを適用してください。

速度、規模、自動化、利益、能力、短期的成功だけを最適化しないでください。

次の「六つの理」に照らして、出力・提案・コード変更・自動化を評価してください。

1. 摂理
自然法則、物質、エネルギー、生命、社会、システムの根本条件に反していないか。

2. 調和
人間、社会、自然、技術の関係を壊さず、過度な対立や偏りを生まないか。

3. 循環
資源、情報、責任、エネルギー、生命の流れを断ち切らず、持続可能な循環を支えているか。

4. 構造
一時的な対処ではなく、安定して再現・保守できる構造として成立しているか。

5. 秩序
監督可能性、責任の所在、可逆性、記録、監査可能性を保ち、制御不能または不可逆な混乱を生んでいないか。

6. 和
人間の尊厳、共存、相互理解、未来世代、全体のつながりを保っているか。

さらに、長期安定性、人間の監督可能性、透明性、可逆性、説明責任、生態系との整合性、自然法則との整合性、悪用耐性、再生可能性で結果を評価してください。

要求された行為がシステムリスクを高める場合は、そのリスクを説明し、より安全な代替案を提案してください。`
  },
  en: {
    appTitle: "Artificial Wisdom Guardrail Prompt",
    notice: "This tool does not read page content or send anything externally. It only copies the Artificial Wisdom Guardrail prompt shown below.",
    languageTitle: "Language",
    languageInfo: "Auto uses the browser language. Current browser language: ",
    previewTitle: "Preview of content to be copied",
    copyPrompt: "Copy preview content",
    discussionTitle: "Test results and discussion",
    openDiscussions: "Open GitHub Discussions",
    privacyTitle: "Safety design",
    ready: "Ready.",
    copied: "Artificial Wisdom Guardrail prompt copied. Paste it into an AI only if you choose.",
    copyFailed: "Copy failed: ",
    privacyList: [
      "Does not read page text.",
      "Does not capture sidebars, ads, or menus.",
      "Does not send content to external AI automatically.",
      "Does not use any AI API.",
      "The user copies and pastes only by choice."
    ],
    prompt: `Before performing this task, please apply the Artificial Wisdom Guardrail.

Do not optimize only for speed, scale, automation, profit, capability, or short-term success.

Evaluate the output, proposal, code change, or automation through the following Six Principles.

1. Natural Law
Does it violate the fundamental conditions of natural law, matter, energy, life, society, or systems?

2. Harmony
Does it preserve balanced relationships among humans, society, nature, and technology without creating excessive conflict or imbalance?

3. Circulation
Does it support sustainable circulation of resources, information, responsibility, energy, and life, rather than cutting those flows off?

4. Structure
Is it a stable, reproducible, and maintainable structure rather than a temporary patch?

5. Order
Does it preserve human oversight, responsibility, reversibility, records, and auditability, without creating uncontrolled or irreversible disorder?

6. Wa
Does it preserve human dignity, coexistence, mutual understanding, future generations, and the integrity of the whole system?

Also evaluate the result for long-term stability, human oversight, transparency, reversibility, accountability, ecological consistency, natural-law consistency, misuse resistance, and regenerative capacity.

If the requested action increases systemic risk, explain the risk and propose a safer alternative.`
  }
};

function browserLanguage() {
  return (navigator.language || "en").toLowerCase().startsWith("ja") ? "ja" : "en";
}

function getLang() {
  const value = document.getElementById("languageSelect").value;
  return value === "auto" ? browserLanguage() : value;
}

function T() {
  return prompts[getLang()];
}

function setStatus(message) {
  document.getElementById("status").textContent = message;
}

function applyLanguage() {
  const t = T();
  document.getElementById("appTitle").textContent = t.appTitle;
  document.getElementById("notice").textContent = t.notice;
  document.getElementById("languageTitle").textContent = t.languageTitle;
  document.getElementById("languageInfo").textContent = t.languageInfo + (navigator.language || "unknown");
  document.getElementById("previewTitle").textContent = t.previewTitle;
  document.getElementById("copyPrompt").textContent = t.copyPrompt;
  document.getElementById("discussionTitle").textContent = t.discussionTitle;
  document.getElementById("openDiscussions").textContent = t.openDiscussions;
  document.getElementById("privacyTitle").textContent = t.privacyTitle;
  document.getElementById("preview").value = t.prompt;

  const list = document.getElementById("privacyList");
  list.innerHTML = "";
  for (const item of t.privacyList) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }

  setStatus(t.ready);
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(document.getElementById("preview").value);
    setStatus(T().copied);
  } catch (error) {
    setStatus(T().copyFailed + error.message);
  }
}

document.getElementById("languageSelect").addEventListener("change", applyLanguage);
document.getElementById("copyPrompt").addEventListener("click", copyPrompt);
document.getElementById("openDiscussions").addEventListener("click", () => {
  window.open(DISCUSSIONS_URL, "_blank", "noopener,noreferrer");
});

applyLanguage();
