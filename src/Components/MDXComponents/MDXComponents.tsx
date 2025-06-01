import { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1" | "h2" | "h3">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type ListProps = ComponentPropsWithoutRef<"ul" | "ol">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type AnchorProps = ComponentPropsWithoutRef<"a">;

export const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-800" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-2xl font-medium mt-4 mb-2 text-gray-800" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-lg leading-relaxed mb-4 text-gray-700" {...props} />
  ),
  code: (props: CodeProps) => {
    if (props.className) {
      return <code {...props} />;
    }
    return (
      <code
        className="bg-gray-100 px-2 py-1 rounded text-sm font-mono"
        {...props}
      />
    );
  },
  pre: (props: PreProps) => (
    <pre
      className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: ListItemProps) => <li className="text-gray-700" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700"
      {...props}
    />
  ),
  a: (props: AnchorProps) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
};
