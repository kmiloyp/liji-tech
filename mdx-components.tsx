import type { MDXComponents } from "mdx/types";

/** Estilos de las guías escritas en MDX (content/guides). */
const components: MDXComponents = {
  h2: (props) => <h2 className="h2 mt-12 mb-4 text-[clamp(1.7rem,3vw,2.3rem)]" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-2 font-display text-2xl font-extrabold uppercase" {...props} />,
  p: (props) => <p className="my-4 max-w-[68ch] text-[1.075rem] leading-[1.7]" {...props} />,
  ul: (props) => <ul className="my-4 max-w-[68ch] list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="my-4 max-w-[68ch] list-decimal space-y-2 pl-6" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  a: (props) => <a className="link" {...props} />,
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="spec min-w-[32rem]" {...props} />
    </div>
  ),
  blockquote: (props) => (
    <blockquote className="my-6 max-w-[68ch] border-l-4 border-brand bg-brand-tint/60 px-5 py-3 text-ink" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
