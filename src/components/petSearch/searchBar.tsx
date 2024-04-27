import { Form, useSearchParams } from "react-router-dom";
import config from "../../../config";
export const SearchBar = ({
  speciesQuery,
  sortQuery,
  clearQuery,
}: {
  speciesQuery: React.MouseEventHandler;
  sortQuery: React.MouseEventHandler;
  clearQuery: React.MouseEventHandler;
}) => {
  const [searchParams] = useSearchParams();

  const styleByQuery = (elementName: string, elementId: string) => {
    return searchParams.getAll(elementName).includes(elementId);
  };

  return (
    <Form id="search-form" role="search">
      <fieldset>
        <div className="flex flex-col">
          <div className="text-center items-center px-2 py-2 text-lg lg:text-2xl font-medium text-gray-900">
            Show Me:
          </div>
          <div
            className="flex flex-row flex-wrap gap-x-1 gap-y-2 content-center justify-center"
            role="group"
          >
            <button
              id="cat"
              onClick={speciesQuery}
              name="species"
              type="button"
              className={`inline-flex w-2/5 h-12 min-w-min lg:m-2 lg:w-1/6 items-center justify-center content-center px-0 py-0  text-sm font-medium rounded-lg text-gray-900 border border-gray-200 hover:bg-slate-400 
              ${
                styleByQuery("species", "cat")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              <svg
                aria-hidden="true"
                className="w-10 h-10 mr-2 fill-current"
                viewBox="0 0 700 700"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m190.96 393.12s-19.039 66.641-36.398 80.641-29.121 14-29.121 22.398c0 8.9609 39.199 8.9609 55.441-10.078 16.238-18.48 62.719-59.922 62.719-59.922s-43.68-10.082-52.641-33.039z" />
                  <path d="m427.28 420s25.199 30.238 26.32 34.16c1.1211 3.9219-3.9219 25.199-14 25.199-10.078 0-12.32 3.9219-12.32 8.9609 0 5.0391 15.121 14 35.281 3.9219 20.16-10.078 16.238-34.16 20.16-50.398l-32.48-22.398c-0.003907-1.125-8.9609 2.793-22.961 0.55469z" />
                  <path d="m607.04 462.56c-8.9609-19.039-17.359-55.441-26.32-59.359-8.9609-3.9219-47.602-34.16-47.602-54.32s-6.1602-61.602-10.078-72.801c-3.9219-11.199 12.32-26.879 10.078-72.801-2.2383-55.441-29.121-117.04-62.719-149.52-34.16-32.48-36.398-11.199-27.441 2.2383 8.9609 14 42.559 50.398 49.281 113.12 6.1602 62.719-20.16 96.879-42.559 99.121-22.398 2.2383-67.762-6.1602-117.04-5.0391-49.84 1.6797-72.242 6.7227-109.2-0.55859-33.039-6.7188-54.879-22.961-78.398-22.961-10.078-15.68-28-24.641-29.121-17.922-1.1211 5.0391 3.3594 18.48 6.1602 26.32-7.8398 4.4805-16.801 9.5195-19.039 11.762-5.0391 5.0391-6.1602 37.52-17.359 46.48-11.199 8.9609 3.9219 26.32 10.078 29.121 11.199 4.4805 26.879 1.6797 40.879 0 14-2.2383 28.559 3.3594 38.078 14.559 6.1602 7.2812 16.801 20.719 21.84 31.922 11.199 26.32 65.52 30.238 95.762 61.602 30.238 31.359 40.32 49.281 31.359 57.68-8.9609 8.9609-17.359 15.121-10.078 19.039 7.2812 3.9219 30.238 8.9609 36.398-16.238 6.1602-25.199 3.9219-20.16-1.1211-39.199-5.0391-19.039-17.359-47.602-41.441-65.52-24.078-17.359-34.16-29.121-34.16-29.121s40.32 16.238 61.602 36.398c0 0 94.078 3.9219 112 0 0 0-20.16-19.039-29.121-37.52-0.55859-1.1211-1.1211-1.6797-1.1211-2.8008 7.2812 6.7188 30.238 27.441 42.559 36.961 15.121 11.199 28.559 21.84 46.48 20.16 30.238-2.2383 42.559 0 60.48 16.238 17.359 16.238 30.238 60.48 45.359 61.602 14.562 1.6758 4.4844-19.602-4.4766-38.645zm-488.88-165.76c-3.9219 0-6.7188-2.8008-6.7188-6.7188 0-3.9219 2.8008-6.7188 6.7188-6.7188 3.9219 0 6.7188 2.8008 6.7188 6.7188s-2.8008 6.7188-6.7188 6.7188z" />
                </g>
              </svg>
              Cats
            </button>
            <button
              id="dog"
              onClick={speciesQuery}
              name="species"
              type="button"
              className={`inline-flex w-2/5 h-12 min-w-min lg:m-2 lg:w-1/6 items-center justify-center content-center px-0 py-0  text-sm font-medium rounded-lg text-gray-900 border border-gray-200 hover:bg-slate-400 
              ${
                styleByQuery("species", "dog")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              <svg
                aria-hidden="true"
                className="w-14 h-12 mr-2 fill-current"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m571.84 121.16c0-57.898-86.582-34.277-103.04-6.7812-11.652 19.48-25.48 15.43-13.016 37.156-0.74609 6.2266-3.332 11.465-7.2031 15.863 11.988 34.5 44.055 57.293 79.328 58.621 9.0898-22.793 6.4453-37.199 19.258-47.102 64.938 1.8984 49.887-23.051 49.887-23.051 19.527-22.281-25.184-28.754-25.219-34.707z" />
                  <path d="m520.45 241.41c-37.312-3.9258-70.609-28.129-85.094-64.055-22.52 11.762-57.254 12.879-71.734 12.652-27.172-0.42578-112.67-18.148-153.2-3.5039-26.578-16.684-60.52-3.6641-110.95-133.96-12.57 153.94 59.156 106.11 85.191 158.98 5.8672 11.91-32.266 21.348-12.477 97.266 13.289 50.961-27.938 77.816-19.797 91.914 13.016 22.523-7.0508 78.887 30.375 79.184 44.465-0.25781-3.3867-22.52 2.6211-75.867 3.7227-33.02 0.35938 72.895 42.156 51.742 30.871-16.27-12.977-17.395-15.5-29.824-11.379-56.398 49.352-74.301 52.605-135.59 37.957-16.801 78.355 58.039 151.57 52.605 27.52 31.445-7.4531 118.47 10.84 123.38 16.273 4.3633-5.2734 54.488 48.004 37.688 26.336-8.3008-7.5938-16.828-16.273-35.797-0.75781-2.6094 53.145 9.2188 2.7109-29.012 5.8281-159.98 59.52-117.27 58.562-197.12 0.14062-0.22656 0.26562-0.45703 0.39062-0.67969z" />{" "}
                </g>
              </svg>
              Dogs
            </button>
            <button
              id="bunny"
              onClick={speciesQuery}
              name="species"
              type="button"
              className={`inline-flex w-2/5 h-12 min-w-min lg:m-2 lg:w-1/6 items-center justify-center content-center px-0 py-0  text-sm font-medium rounded-lg text-gray-900 border border-gray-200 hover:bg-slate-400 
              ${
                styleByQuery("species", "bunny")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              <svg
                aria-hidden="true"
                className="w-9 h-9 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 700 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m381.8 85.121c-4.7578 0-8.6211-3.8594-8.6211-8.625 0-4.7578 3.8633-8.6172 8.6211-8.6172 4.7617 0 8.625 3.8594 8.625 8.6172 0 4.7656-3.8633 8.625-8.625 8.625m151.53-30.57c-19.973-6.7305-43.645 10.449-56.531 56.852-7.9453 28.613-21.359 41.758-30.824 48.238-1.7891-2.707-3.5586-5.4258-5.5156-8.0273-6.6055-12.359-13.555-11.281-2.2891-25.836 11.273-14.555 38.516-66.59 25.859-85.844-18.91-28.754-118.29-1.1992-156.66 36.574-2.1016 2.0664-5.2578 2.625-7.9961 1.5273-38.309-15.414-106.18-36.445-145.37-11.617 0 0 32.395 48.359 133.48 59.621-0.98047 1.0078-96.699 66.773-96.457 129.93 1.4102 0.45312 58.047-6.0273 124.57-95.195 2.2344-2.9961 7.1289-2.332 8.1719 1.2539 30.012 103.51-114.71 233.36-107.22 291.75 0 0-8.7109-49.617-43.492-32.969-28.355 13.57-16.613 86.578 54.094 82.008 1.8242-0.11719 3.2656 1.4688 2.8945 3.2656-1.375 6.7188-1.1289 15.32 2.9766 25.91l188.48-0.69922s10.539-34.934-13.832-35.152c-24.371-0.21094-37.727 6.4062-40.105-5.7461-2.375-12.156 78.758-48.91 98.812-120.76 13.152-47.133 16.949-100.77 5.4922-148.8-2.2383-9.3867 0.050781-19.23 6.3789-26.512 40.699-46.844 35.543-100.17 50.035-103.42 16.371-3.668 25.02-29.633 5.0508-36.359" />
              </svg>
              Bunnies
            </button>
            <button
              id="chicken"
              onClick={speciesQuery}
              name="species"
              type="button"
              className={`inline-flex w-2/5 h-12 min-w-min lg:m-2 lg:w-1/6 items-center justify-center content-center px-0 py-0  text-sm font-medium rounded-lg text-gray-900 border border-gray-200 hover:bg-slate-400 
              ${
                styleByQuery("species", "chicken")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              <svg
                aria-hidden="true"
                className="w-11 h-11 mr2 fill-current "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 700 600"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="m165.25 95.531c3.3359-7.2812 12.039-11.367 34.785-11.367 10.895 0 20.836 3.9453 29.68 10.551 4.582-8.9219 9.0508-21.648 4.7852-32.289-7.4219-18.555-7.4219-9.0117-11.672-4.7734 0 0-9.0117-16.445-15.375-10.078-6.3633 6.3633-6.3633 9.5469-6.3633 9.5469s-9.0117-14.852-18.035-6.3633c-8.9961 8.4883-7.9258 12.203-7.9258 12.203s-13.262-2.6602-14.32 5.8281c-1.0703 8.4922 2.1133 13.262 2.1133 13.262s-18.023 1.582-13.25 5.2969c2.2773 1.7812 9.1133 5.168 15.578 8.1836z" />
                  <path d="m156.91 182.57c2.8242-2.0625 5.1055-4.9648 6.9609-8.3867 2.8125-17.066 3.2578-29.793 0.45703-37.852-1.1719-3.3594-3.9453-5.4844-8.1055-6.5039-3.3984 8.9609-9.4453 22.758-16.953 30.344-13.121 13.285 8.043 29.41 17.641 22.398z" />
                  <path d="m456.72 165.84c-54.969-12.879-134.69 74.238-132.58 100.76 0 0-47.5-33.945-52.922-74.238-5.4102-40.309-30.863-101.82-71.172-101.82s-25.453 12.727-32.875 18.035c0 0-24.398 6.3633-24.398 14.852 0 0 22.156-4.7227 27.578 10.832 6.0977 17.5-0.80078 51.48-14.637 103.71 0 0-42.215 74.238 0 118.79 6.4141 6.7578 13.148 13.172 19.98 19.281 6.668 17.973 23.254 60.633 35.609 75.895l3.4727 44.113c-6.0703-1.375-12.461-2.1641-19.945-1.4141-21.215 2.125-24.133 17.934-10.68 15.641 9.9141-1.6914 15.641-1.1562 23.074 0.59766 3.6016 0.83984 4.4297 2.7617 12.727 3.0156l23.266-0.039063c0.48438 0 0.87891-0.027343 1.3359-0.027343-2.1016-1.9102-3.207-4.4805-3.3359-6.9492-0.050781-1.2109 0.17969-2.4453 0.53516-3.6914-4.9141-0.87891-9.418-2.1875-13.848-3.5117l6.0703-45.219c6.1328-3.5898 12.191-11.125 18.621-26.293 7 3.168 12.777 5.1055 16.977 5.7539 4.1875 7.8398 8.8594 15.145 13.426 19.5l3.3711 42.66c-6.0703-1.375-12.473-2.1758-19.957-1.4258-21.215 2.125-24.133 17.934-10.68 15.641 9.9141-1.6914 15.641-1.1562 23.074 0.59766 3.6016 0.83984 4.4297 2.7617 12.727 3.0156l23.266-0.039063c28.434 0 18.594-8.707 5.7656-9.7227-7.8516-0.625-14.559-2.5078-21.062-4.4688l6.0703-45.219c7.9688-4.6562 15.832-15.922 24.473-42.09 12.688-8.7188 24.957-20.082 34.375-34.402 0 0 37.113-47.727 66.816-11.672 29.691 36.055 68.93-132.58 133.64-65.762 0.023438 0 0.54688-109.24-108.16-134.69zm-263.85-44.672c-5.2812 0-9.5469-4.2773-9.5469-9.5469 0-5.2695 4.2617-9.5469 9.5469-9.5469 5.2695 0 9.5469 4.2773 9.5469 9.5469 0 5.2695-4.2773 9.5469-9.5469 9.5469z" />
                </g>
              </svg>
              Chickens
            </button>
            <button
              onClick={speciesQuery}
              id="rat"
              name="species"
              type="button"
              className={`inline-flex w-2/5 h-12 min-w-min lg:m-2 lg:w-1/6 items-center justify-center content-center px-0 py-0  text-sm font-medium rounded-lg text-gray-900 border border-gray-200 hover:bg-slate-400 
              ${
                styleByQuery("species", "rat")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 fill-current"
                fill="currentColor"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m1129.8 177.38c-7.1992-22.512-93.562-18.383-165.91 4.0312-9.7695-43.188-31.199-73.211-56.363-73.414-23.809-0.22656-44.762 26.27-55.824 65.52-48.59-24.098-94.895-26.16-111.19-2.2188-17.977 26.398 6.8867 75.191 55.992 113.68-33.301 32.977-60.348 69.266-80.629 104.43-75.742 131.24-169.09 206.98-201.95 282.67-20.762 47.941-45.527 140.38-16.105 208.15-27.289-2.2188-59.34-3.4453-96.086-3.6719-94.031-0.61328-125.7-25.523-125.7-36.805 0-9.0703 23.832-27.047 79.031-27.551 76.262-0.69531 103.33-27.707 103.22-52.715-0.16797-37.848-61.477-76.02-198.01-76.02-85.297 0-150.64 21.395-170.54 55.812-7.5117 13.066-7.7383 27.086-0.57422 39.469 14.797 25.656 58.992 39.758 124.43 39.758 8.3633 0 15.156-6.7812 15.156-15.168 0-8.3633-6.7812-15.156-15.156-15.156-66.289 0-92.914-15.469-98.219-24.602-1.1992-2.125-1.9922-4.6914 0.61328-9.168 9.4453-16.344 55.668-40.703 144.29-40.703 126.27 0 167.68 34.117 167.71 45.863 0.058594 7.5469-21.395 21.805-73.211 22.285-75.371 0.70703-109.08 29.578-109.04 57.887 0.058594 31.945 41.016 66.336 155.8 67.043 47.328 0.3125 82.656 2.3164 109.02 5.0039 13.555 27.992 57.953 39.582 89.406 72.211 62.484 64.703 109.85 122.75 130.8 102.53 13.129-12.684 12.59-64.68-10.801-102.53 12.371 2.1953 34.621 2.1484 48 3.7578 89.293 10.934 146.48 26.148 148.92 6.5156 1.9453-15.695-42.84-34.68-106.57-47.23 107.04-47.242 112.33-175.12 127.69-325.44 13.547-132.76 44.93-216.14 95.93-292.78 43.988-66.156 105.29-122.21 95.875-151.44zm-214.75 114.88c-20.305 0-36.77-16.465-36.77-36.77 0-20.305 16.465-36.77 36.77-36.77 20.305 0 36.77 16.465 36.77 36.77-0.003907 20.305-16.469 36.77-36.77 36.77z" />
                  <path d="m1004.2 654.07c-17.438 15.168-60.938-6.2539-97.117-47.855-36.168-41.617-51.348-87.66-33.863-102.84 17.461-15.191 26.629 31.02 62.809 72.625 36.18 41.617 85.656 62.855 68.172 78.07z" />
                </g>
              </svg>
              Rats
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset className="flex flex-row my-3 mx-auto" role="group">
        <div className="flex flex-row mx-auto">
          <div className=" inline-flex h-10 items-center px-2 py-3 text-lg lg:text-xl font-medium text-gray-900">
            Sort By:
          </div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={sortQuery}
              type="button"
              id="age"
              name="sort"
              value="age"
              className={`px-4 py-0 w-34 h-10 text-sm font-medium rounded-l-lg border-l border-t border-b text-gray-900 border border-gray-200  
              ${
                styleByQuery("sort", "age")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              Age
            </button>
            <button
              onClick={sortQuery}
              type="button"
              id="fee"
              name="sort"
              value="fee"
              className={`px-4 py-0 w-34 h-10 text-sm font-medium border-r border-t border-b text-gray-900 border border-gray-200  
              ${
                styleByQuery("sort", "fee")
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              }`}
            >
              Fee
            </button>
            <button
              onClick={sortQuery}
              type="button"
              id="dateAddedToSite"
              name="sort"
              value="days"
              className={`px-4 py-0 w-34 h-10 text-sm font-medium rounded-r-lg border-r border-t border-b text-gray-900 border border-gray-200  
                ${
                  styleByQuery("sort", "dateAddedToSite")
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-slate-100 text-black hover:bg-slate-200"
                }`}
            >
              Days on Site
            </button>
          </div>
        </div>
      </fieldset>

      <button
        onClick={clearQuery}
        type="submit"
        className=" flex my-0 mx-auto px-4 py-2 w-34 h-10 text-sm font-medium border border-gray-200 rounded-lg bg-slate-100 text-black hover:bg-slate-200 hover:text-black active:bg-slate-700 active:text-white"
      >
        Clear Search
      </button>
    </Form>
  );
};
