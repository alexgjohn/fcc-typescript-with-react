//create a component with the following features:

//it takes props type and name (both strings)
//IF it's type advanced, it also takes a prop email (string)

type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps

function Component(props: ProfileCardProps) {
  const { type, name } = props;

  if (type === 'basic') {
    return <article className="alert alert-success">
      <h2>user: {name}</h2>
    </article>
  } else {
    const { email } = props;
    return <article className="alert alert-danger">
      <h2>user: {name}</h2>
      <h2>email: {email}</h2>
    </article>
  }
}
export default Component;
