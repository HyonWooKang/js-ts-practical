import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { lazy, Suspense, type JSX } from "react";
import RootLayout from "./RootLayout";
import ErrorBoundary from "./ErrorBoundary";
// 페이지 추가
// const Home = lazy(() => import("../pages/Home"));
import Home from "../pages/Home";
import Loops from "../pages/Loops";

function withSuspense(element: JSX.Element) {
  return (
    <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
      {element}
    </Suspense>
  );
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: "loops", element: withSuspense(<Loops />) },
      // 404
      {
        path: "*",
        element: (
          <div style={{ padding: 16 }}>
            <h1>404 Not Found</h1>
          </div>
        ),
      },
    ],
  },
];

// basename: "/js-ts-practical", // GitHub Pages 등 서브 경로 배포 시 사용
export const router = createBrowserRouter(routes, {});
