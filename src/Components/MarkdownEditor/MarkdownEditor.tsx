import { useRef, useState } from "react";

export const MarkdownEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isPreview, setIsPreview] = useState(false);

  const insertText = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText =
      value.substring(0, start) +
      before +
      selectedText +
      after +
      value.substring(end);

    onChange(newText);

    // Restaurar foco e seleção
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length
      );
    }, 0);
  };

  const toolbarButtons = [
    { label: "Bold", action: () => insertText("**", "**"), icon: "B" },
    { label: "Italic", action: () => insertText("*", "*"), icon: "I" },
    { label: "Heading 1", action: () => insertText("# "), icon: "H1" },
    { label: "Heading 2", action: () => insertText("## "), icon: "H2" },
    { label: "Link", action: () => insertText("[", "](url)"), icon: "🔗" },
    { label: "Image", action: () => insertText("![alt](", ")"), icon: "🖼️" },
    { label: "Code", action: () => insertText("`", "`"), icon: "<>" },
    {
      label: "Code Block",
      action: () => insertText("```\n", "\n```"),
      icon: "{ }",
    },
    { label: "List", action: () => insertText("- "), icon: "•" },
    { label: "Quote", action: () => insertText("> "), icon: "❝" },
  ];

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={button.action}
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={button.label}
          >
            {button.icon}
          </button>
        ))}
        <div className="ml-auto">
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className={`px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isPreview ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
            }`}
          >
            {isPreview ? "Editar" : "Preview"}
          </button>
        </div>
      </div>

      {/* Editor/Preview */}
      <div className="flex" style={{ minHeight: "400px" }}>
        {/* Editor */}
        <div
          className={`${
            isPreview ? "w-1/2 border-r border-gray-300" : "w-full"
          }`}
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-full p-4 border-none resize-none focus:outline-none font-mono text-sm"
            placeholder="Digite seu markdown aqui..."
            style={{ minHeight: "400px" }}
          />
        </div>

        {/* Preview */}
        {isPreview && (
          <div
            className="w-1/2 p-4 bg-white overflow-auto"
            style={{ minHeight: "400px" }}
          >
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{
                __html: value
                  .replace(/^### (.*$)/gim, "<h3>$1</h3>")
                  .replace(/^## (.*$)/gim, "<h2>$1</h2>")
                  .replace(/^# (.*$)/gim, "<h1>$1</h1>")
                  .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
                  .replace(/\*(.*)\*/gim, "<em>$1</em>")
                  .replace(/\`(.*)\`/gim, "<code>$1</code>")
                  .replace(/\n/gim, "<br>"),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
