import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

function Component() {
  const context = useTheme();
  console.log(context)
  return (
    <div>
      <button onClick={() => {
        if (context.theme === 'dark') {
          context.setTheme('system');
          return
        } else {
          context.setTheme('dark');
        }
      }}
        className="btn btn-center">Toggle theme</button>
    </div>
  );
}
export default ParentComponent;
