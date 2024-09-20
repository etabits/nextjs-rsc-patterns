import type { NextPage } from "next";
import { changePageBackground } from "./change-bg";
import { incrementMe } from "./increment";
import { tellIP } from "./tell-ip";

const HandlerPatternPage: NextPage = () => {
  return (
    <div>
      <div className="prose prose-lg dark:prose-invert">
        <h1>Passing a client event handler directly from an RSC</h1>
        <p>
          While you cannot directly use inline handlers in RSCs, you may pass
          ones imported from <code>'use client';</code> files. I used to have an
          intermediary client component before I figured out this is possible.
        </p>
        <p>
          The first row of numbers will increment (handler does direct HTML
          mutation). Second row takes box color and applies it to page's. Third
          button has a handler that fetches ip and then displays it via
          browser's `alert` API.
        </p>
        <p>
          Note that you cannot pass values directly to the imported functions
          (no wrapping functions, nor binding.) but you can still utilize
          element attributes (content itself, style, and most importantly
          datasets) to inline data that the handler can then pick up.
        </p>
      </div>
      <ul className="flex flex-row justify-around">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            const incrementBy = Math.round(Math.random() * 1e2);
            return (
              <li
                key={i}
                data-increment-by={incrementBy}
                title={`Increments by ${incrementBy}`}
                className="border rounded text-5xl p-4 m-4 cursor-pointer"
                onClick={incrementMe}
              >
                {i + 1}
              </li>
            );
          })}
      </ul>
      <ul className="flex flex-row justify-around">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            const hue = Math.round(Math.random() * 360);
            return (
              <li
                key={i}
                data-hue={hue}
                className="border rounded p-4 m-4 cursor-pointer"
                onClick={changePageBackground}
                style={{ backgroundColor: `hsl(${hue} 30% 50%)` }}
              >
                .
              </li>
            );
          })}
      </ul>
      <div>
        <button
          className="bg-gray-400 rounded border-gray-400 p-4 m-auto block"
          onClick={tellIP}
        >
          What's my IP address?
        </button>
      </div>
    </div>
  );
};

export default HandlerPatternPage;
