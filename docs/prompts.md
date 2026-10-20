# convert JSON to CSS Variables
Task: Convert the design token JSON file @/tokens-complete.json into a CSS variables file

Core rule (non-negotiable):
The JSON has two colour layers: primitive colours (raw palette values such as green-600 or neutral-100) and colour roles (semantic names such as surface, text-primary, action-primary, border-subtle, feedback-error). Interface code must use colour roles only. Primitive colours must never be referenced directly by any component, page, or stylesheet. The design system is the single source of truth: if a colour is needed and no role exists for it, do not reach for a primitive. Flag the gap and stop.

Steps:
1. Read the JSON and identify which tokens are primitives and which are roles. Roles are the ones that alias primitives (for example "{color.green.600}") or carry a semantic name.
2. Generate tokens.css with two clearly commented sections inside :root:
   a. "Primitives (internal only. Do not use in UI code)": one variable per primitive, e.g. --primitive-green-600: #1F7A4D;
   b. "Roles (use these in the interface)": one variable per role, defined by referencing the primitive variable, e.g. --color-action-primary: var(--primitive-green-600);
3. Preserve alias chains. Roles must reference primitives with var(), never copy the hex value, so a change to a primitive flows through automatically.
4. If the JSON defines themes or modes (e.g. dark), output the role overrides under [data-theme="dark"] (or @media (prefers-color-scheme: dark) if the JSON implies it). Only roles are overridden. Primitives stay unchanged.
5. Convert non-colour tokens (spacing, radius, typography, shadow) to variables in the same file, using the same naming pattern. Use kebab-case, and keep the JSON's hierarchy in the name.
6. Do not invent, rename, round, or drop values. If a value is ambiguous or a reference is broken, list it in your report instead of guessing.

Enforcement:
- Search the existing codebase for any use of var(--primitive-*) or raw hex/rgb/hsl values outside tokens.css. List every occurrence and replace each with the matching role variable. If no role matches, list it as a gap for me to decide.
- Add a short check (a stylelint rule or a simple grep script) that fails if --primitive-* is used anywhere except tokens.css.

Deliver:
- tokens.css
- A brief report: count of primitives, count of roles, any gaps, broken references, or replacements made.
- Do not change anything else in the project.

# Raw Color Values search command
grep -rnIiE \
  --exclude-dir={node_modules,dist,build,.git} \
  --exclude={tokens.css,package-lock.json,"*.lock"} \
  '#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b|\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(' .

# Search Command output
-449c-9ef6-30b375a5533bAt line:2 char:5
+   --exclude-dir={node_modules,dist,build,.git} \
+     ~
Missing expression after unary operator '--'.
At line:2 char:5
+   --exclude-dir={node_modules,dist,build,.git} \
+     ~~~~~~~~~~~~
Unexpected token 'exclude-dir=' in expression or statement.
At line:2 char:30
+   --exclude-dir={node_modules,dist,build,.git} \
+                              ~
Missing argument in parameter list.
At line:3 char:5
+   --exclude={tokens.css,package-lock.json,"*.lock"} \    
+     ~
Missing expression after unary operator '--'.
At line:3 char:5
+   --exclude={tokens.css,package-lock.json,"*.lock"} \
+     ~~~~~~~~
Unexpected token 'exclude=' in expression or statement.
At line:3 char:24
+   --exclude={tokens.css,package-lock.json,"*.lock"} \
+                        ~
Missing argument in parameter list.
At line:4 char:90
+ ... a-f]{6}|[0-9a-f]{3,4})\b|\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(' .
+                                                                         ~
Unexpected token '.' in expression or statement.
At line:4 char:90
+ ... a-f]{6}|[0-9a-f]{3,4})\b|\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(' .
+                                                                         ~
Missing expression after '.' in pipeline element.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingExpressionAfterOperator

# Typography style agent used
 ┌────────────────────┬─────────────┬────────────────────────┐
     │Element             │Style        │Size / line-height /    │  
     │                    │             │weight                  │  
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Card titles ("Your  │title-medium │16px / 24px / 500       │  
     │position today",    │             │                        │
     │"Loan repayment", …)│             │                        │
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Big naira figures ( │headline-    │32px / 40px / 400       │  
     │savings, loan       │large        │                        │
     │outstanding)        │             │                        │
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Labels ("Total      │body-medium  │14px / 20px / 400       │
     │savings", "Loan     │             │                        │
     │outstanding")       │             │                        │  
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Source/provenance   │body-small   │12px / 16px / 400       │
     │lines, meta text    │             │                    │Borrow card         │title-medium │16px / 24px (body-large │  
     │headline + body     │+ body-large │gives the 1.5 line-     │  
     │                    │             │height from your design │
     │                    │             │decisions)              │
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Repayment summary   │body-large   │16px / 24px / 400       │  
     │sentence            │             │                        │
     ├────────────────────┼─────────────┼────────────────────────┤
     │Activity row text / │body-medium /│14px / 12px             │  
     │dates               │ body-small  │                        │
     ├────────────────────┼─────────────┼────────────────────────┤
     │Activity amounts    │title-small  │14px / 20px / 500       │  
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Buttons             │label-large  │14px / 20px / 500       │  
     ├────────────────────┼─────────────┼────────────────────────┤  
     │Status chips (Paid /│label-small  │11px / 16px / 500       │  
     │ Due Sat)           │             │                        │  
     └────────────────────┴─────────────┴───────

