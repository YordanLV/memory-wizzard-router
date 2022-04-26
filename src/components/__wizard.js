import React from "react";
import { Link, MemoryRouter as Router, Route, Redirect } from "react-router-dom";

// export const Wizard = ({ children }) => {
//   const steps = React.Children.toArray(children);
//   return (
//     <Router>
//       <Template path="/:currentPath" steps={steps} />
//       <Redirect from="/" to={steps[0].props.path} noThrow/>
//     </Router>
//   );
// };

// export const Step = ({ children }) => children;

// function Template({ currentPath, steps }) {

//   console.log(currentPath);
//   const currentIndex = steps.findIndex(step => step.props.path === currentPath);
//   const prevStep = currentIndex > 0 && steps[currentIndex - 1].props;
//   const nextStep =
//     currentIndex < steps.length - 1 && steps[currentIndex + 1].props;

//   if (currentIndex < 0) {
//     return <NoMatch path={steps[0].props.path} />;
//   };
//   return (
//     <div>
//       <nav className="btn-group d-flex">
//         {steps.map((step, index) => (
//           <Route
//             key={step.props.title}
//             to={`../${step.props.path}`}
//             getProps={isActive}
//             title={step.props.description}
//           >
//             {console.log(step)};
//             {step.props.title}
//           </Route>
//         ))}
//       </nav>

//       {steps[currentIndex]}

//       <div className="mt-2 d-flex justify-content-between">
//         <Button path={prevStep.path} title={prevStep.description}>
//           Back
//         </Button>
//         <Button path={nextStep.path} title={nextStep.description}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }

// function NoMatch(props) {
//   return <Redirect to={props.path} noThrow />;
// }

// function Button({ path, ...props }) {
//   return (
//     <Link
//       to={`../${path}`}
//       className={path ? "btn btn-primary" : "invisible"}
//       {...props}
//     />
//   );
// }

// function isActive({ isCurrent }) {
//   return {
//     className: "btn btn-primary flex-fill" + (isCurrent ? " active" : "")
//   };
// }

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

export default function MyApp() {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
    </section>
  );
}
