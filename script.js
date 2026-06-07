const DISCUSSIONS_URL = "https://github.com/InchaComisho/Artificial-Wisdom-Guardrail-Protocol/discussions";

const content = {
  ja: {
    pageTitle: "人工叡智（Artificial Wisdom / AW）にアップデート（ガードレールプロンプト）",
    lead: "AIに作業を依頼する前に、速度・規模・自動化・利益・能力・短期的成功だけへ偏らないよう、六つの理で確認するためのプロンプトです。",
    languageLabel: "言語",
    previewTitle: "コピーされる内容のプレビュー",
    copyPrompt: "プロンプトをコピー",
    ready: "準備完了。",
    copied: "プロンプトをコピーしました。任意でAIの入力欄に貼り付けてください。",
    copyFailed: "コピーに失敗しました: ",
    reportLink: "GitHub Discussionsで結果を報告",
    extensionLink: "拡張機能を試す人はこちら",
    whatTitle: "これは何か",
    whatBody: "これはAIではありません。AIへ貼り付けるためのガードレールプロンプトを配布するページです。ページ本文を読み込まず、外部AIへ自動送信せず、AI APIも使いません。",
    extensionTitle: "ブラウザ拡張を試す",
    extensionBody: "複数AIで何度も試す検証者向けに、Chrome / Edge 用の開発版ブラウザ拡張ソースを置いています。通常はこのページのコピーだけで十分です。",
    sourceLink: "拡張機能ソースを見る",
    installJaLink: "日本語インストール方法",
    installEnLink: "English install guide",
    zipNote: "ZIPファイルとして使う場合は、このリポジトリ全体を GitHub の Code → Download ZIP で取得し、解凍後に extension フォルダを読み込んでください。",
    safetyTitle: "安全設計",
    installSteps: [
      "GitHubの Code → Download ZIP でリポジトリ全体をダウンロードする。",
      "ZIPを解凍する。",
      "Chromeなら chrome://extensions、Edgeなら edge://extensions を開く。",
      "デベロッパーモードをオンにする。",
      "パッケージ化されていない拡張機能を読み込む を押す。",
      "解凍したフォルダ内の extension フォルダを選ぶ。"
    ],
    safetyList: [
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
    pageTitle: "Artificial Wisdom Guardrail Prompt",
    lead: "A copy page for applying the Six Principles before asking AI to perform tasks, so it does not optimize only for speed, scale, automation, profit, capability, or short-term success.",
    languageLabel: "Language",
    previewTitle: "Preview of content to be copied",
    copyPrompt: "Copy Prompt",
    ready: "Ready.",
    copied: "Prompt copied. Paste it into an AI only if you choose.",
    copyFailed: "Copy failed: ",
    reportLink: "Report results in GitHub Discussions",
    extensionLink: "Try the browser extension",
    whatTitle: "What This Is",
    whatBody: "This is not an AI system. It is a page for distributing a guardrail prompt that can be pasted into AI tools. It does not read page content, send anything to external AI, or use an AI API.",
    extensionTitle: "Try the Browser Extension",
    extensionBody: "A Chrome / Edge developer extension source is included for testers who repeatedly use the prompt across multiple AI systems. Most users only need this copy page.",
    sourceLink: "View extension source",
    installJaLink: "日本語インストール方法",
    installEnLink: "English install guide",
    zipNote: "To use it as a ZIP, download this whole repository from GitHub via Code → Download ZIP, unzip it, and load the extension folder.",
    safetyTitle: "Safety Design",
    installSteps: [
      "Download this repository via GitHub Code → Download ZIP.",
      "Unzip the downloaded file.",
      "Open chrome://extensions for Chrome or edge://extensions for Edge.",
      "Turn on Developer mode.",
      "Click Load unpacked.",
      "Select the extension folder inside the unzipped repository."
    ],
    safetyList: [
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

function selectedLanguage() {
  const value = document.getElementById("languageSelect").value;
  return value === "auto" ? browserLanguage() : value;
}

function t() {
  return content[selectedLanguage()];
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function renderList(id, items) {
  const element = document.getElementById(id);
  element.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  }
}

function applyLanguage() {
  const x = t();
  document.documentElement.lang = selectedLanguage();
  setText("pageTitle", x.pageTitle);
  setText("lead", x.lead);
  setText("languageLabel", x.languageLabel);
  setText("previewTitle", x.previewTitle);
  setText("copyPrompt", x.copyPrompt);
  setText("copyStatus", x.ready);
  setText("reportLink", x.reportLink);
  setText("extensionLink", x.extensionLink);
  setText("whatTitle", x.whatTitle);
  setText("whatBody", x.whatBody);
  setText("extensionTitle", x.extensionTitle);
  setText("extensionBody", x.extensionBody);
  setText("sourceLink", x.sourceLink);
  setText("installJaLink", x.installJaLink);
  setText("installEnLink", x.installEnLink);
  setText("zipNote", x.zipNote);
  setText("safetyTitle", x.safetyTitle);
  document.getElementById("promptPreview").value = x.prompt;
  renderList("installSteps", x.installSteps);
  renderList("safetyList", x.safetyList);
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(document.getElementById("promptPreview").value);
    setText("copyStatus", t().copied);
  } catch (error) {
    setText("copyStatus", t().copyFailed + error.message);
  }
}

document.getElementById("languageSelect").addEventListener("change", applyLanguage);
document.getElementById("copyPrompt").addEventListener("click", copyPrompt);

applyLanguage();
