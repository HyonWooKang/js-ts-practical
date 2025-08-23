import { Link } from "react-router-dom";

const topics = [
  {
    path: "/loops",
    title: "반복문 (Loops)",
    desc: "for, for...of, forEach 등 반복 학습",
  },
  {
    path: "/conditionals",
    title: "조건문 (Conditionals)",
    desc: "if, switch, 삼항 연산자",
  },
  {
    path: "/functions",
    title: "함수 (Functions)",
    desc: "함수 선언, 표현식, 화살표 함수",
  },
  {
    path: "/objects",
    title: "객체 & 배열",
    desc: "구조분해, 스프레드, Map/Set",
  },
  {
    path: "/typescript",
    title: "타입스크립트 기초",
    desc: "타입, 인터페이스, 제네릭",
  },
];

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>📚 JavaScript & TypeScript Study</h1>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        학습할 주제를 선택하세요
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {topics.map((topic) => (
          <Link
            key={topic.path}
            to={topic.path}
            style={{
              display: "block",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#333",
              background: "white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              transition: "all 0.2s ease",
            }}
          >
            <h2 style={{ margin: "0 0 0.5rem" }}>{topic.title}</h2>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
              {topic.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
