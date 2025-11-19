import React from 'react';
import CodeBlock from './CodeBlock';

const MarkdownRenderer = ({ content }) => {
  // Split content by code blocks
  const parts = content.split(/```([\s\S]*?)```/);
  
  return (
    <div className="prose dark:prose-invert max-w-none">
      {parts.map((part, index) => {
        // Even indices are regular markdown, odd indices are code blocks
        if (index % 2 === 0) {
          return <RegularMarkdown key={index} content={part} />;
        } else {
          // Extract language and code
          const lines = part.trim().split('\n');
          const firstLine = lines[0];
          
          // Check if first line is a language specifier (no spaces)
          const isLanguage = /^[a-z]+$/.test(firstLine);
          const language = isLanguage ? firstLine : 'javascript';
          const code = isLanguage ? lines.slice(1).join('\n') : part.trim();
          
          return (
            <CodeBlock 
              key={index} 
              code={code} 
              language={language}
            />
          );
        }
      })}
    </div>
  );
};

// Component to render regular markdown
const RegularMarkdown = ({ content }) => {
  if (!content.trim()) return null;

  // Parse headings, paragraphs, lists, and HTML
  const lines = content.split('\n');
  const elements = [];
  let currentList = [];
  let inList = false;
  let htmlBuffer = '';

  const flushHtmlBuffer = (idx) => {
    if (htmlBuffer.trim()) {
      elements.push({ 
        type: 'html', 
        content: htmlBuffer, 
        key: `html-${idx}` 
      });
      htmlBuffer = '';
    }
  };

  lines.forEach((line, idx) => {
    // Check if line contains HTML
    if (line.includes('<') || line.includes('>')) {
      if (currentList.length > 0) {
        elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
        currentList = [];
        inList = false;
      }
      htmlBuffer += line + '\n';
    } else if (line.startsWith('# ')) {
      flushHtmlBuffer(idx);
      if (currentList.length > 0) {
        elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
        currentList = [];
        inList = false;
      }
      elements.push({ 
        type: 'h1', 
        content: line.substring(2).trim(), 
        key: `h1-${idx}` 
      });
    } else if (line.startsWith('## ')) {
      flushHtmlBuffer(idx);
      if (currentList.length > 0) {
        elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
        currentList = [];
        inList = false;
      }
      elements.push({ 
        type: 'h2', 
        content: line.substring(3).trim(), 
        key: `h2-${idx}` 
      });
    } else if (line.startsWith('### ')) {
      flushHtmlBuffer(idx);
      if (currentList.length > 0) {
        elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
        currentList = [];
        inList = false;
      }
      elements.push({ 
        type: 'h3', 
        content: line.substring(4).trim(), 
        key: `h3-${idx}` 
      });
    } else if (line.startsWith('✅') || line.startsWith('✓')) {
      inList = true;
      currentList.push({ type: 'check', text: line.substring(1).trim() });
    } else if (line.startsWith('-') || line.startsWith('•')) {
      inList = true;
      currentList.push({ type: 'bullet', text: line.substring(1).trim() });
    } else if (line.startsWith('1.') || /^\d+\./.test(line)) {
      inList = true;
      currentList.push({ type: 'number', text: line.replace(/^\d+\.\s*/, '').trim() });
    } else if (line.trim()) {
      flushHtmlBuffer(idx);
      if (currentList.length > 0) {
        elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
        currentList = [];
        inList = false;
      }
      elements.push({ 
        type: 'p', 
        content: line, 
        key: `p-${idx}` 
      });
    } else if (line.trim() === '' && currentList.length > 0) {
      flushHtmlBuffer(idx);
      elements.push({ type: 'list', items: currentList, key: `list-${idx}` });
      currentList = [];
      inList = false;
    }
  });

  flushHtmlBuffer(lines.length);
  if (currentList.length > 0) {
    elements.push({ type: 'list', items: currentList, key: `list-final` });
  }

  return (
    <>
      {elements.map((el) => {
        if (el.type === 'h1') {
          return (
            <h1 key={el.key} className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              {el.content}
            </h1>
          );
        } else if (el.type === 'h2') {
          return (
            <h2 key={el.key} className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              {el.content}
            </h2>
          );
        } else if (el.type === 'h3') {
          return (
            <h3 key={el.key} className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
              {el.content}
            </h3>
          );
        } else if (el.type === 'p') {
          return (
            <p key={el.key} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {el.content}
            </p>
          );
        } else if (el.type === 'html') {
          return (
            <div
              key={el.key}
              className="dark:text-gray-300 mb-6"
              dangerouslySetInnerHTML={{ __html: el.content }}
            />
          );
        } else if (el.type === 'list') {
          return (
            <ul key={el.key} className="space-y-2 mb-4 ml-4">
              {el.items.map((item, i) => (
                <li 
                  key={i} 
                  className={`text-gray-700 dark:text-gray-300 flex items-start gap-3 ${
                    item.type === 'check' ? 'text-green-600 dark:text-green-400' : ''
                  }`}
                >
                  {item.type === 'check' && <span className="text-lg">✅</span>}
                  {item.type === 'bullet' && <span className="text-lg">•</span>}
                  {item.type === 'number' && <span className="font-semibold">{el.items.indexOf(item) + 1}.</span>}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
};

export default MarkdownRenderer;
