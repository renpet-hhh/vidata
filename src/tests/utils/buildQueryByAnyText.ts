import { RenderResult } from "@testing-library/react";


/** Returns a query that searches for text in "textContent", "value" and "placeholder" positions */
export default (renderResult: RenderResult) => (text: string) => {
    const byText = renderResult.queryByText(text);
    if (byText) return byText;

    const byValue = renderResult.queryByDisplayValue(text);
    if (byValue) return byValue;

    const byPlaceholder = renderResult.queryByPlaceholderText(text);
    if (byPlaceholder) return byPlaceholder;

    return null;
}


