const Skills = () => {
  return (
    <>
      <h1 className="heading mt-20">Skills & <span className="text-purple">Technologies</span></h1>
      <table className="flex justify-center items-center m-10 rounded-2xl table-auto border-separate border-spacing-6 border border-slate-500">
        <tbody>
          <tr>
            <td>
              <p className="text-4xl font-semibold">Programming:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=java"
                alt="java"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=py"
                alt="python"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=c"
                alt="c"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=cpp"
                alt="cplusplus"
                width="80"
                height="80"
              />
            </td>
          </tr>
          <tr className="border-slate-500">
            <td>
              <p className="text-4xl font-semibold">Frontend:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=html"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=js"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=ts"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=react"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=next"
                width="80"
                height="80"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-4xl font-semibold">UI Frameworks:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=bootstrap"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                width="80"
                height="80"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-4xl font-semibold">Backend:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=expressjs"
                width="80"
                height="80"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-4xl font-semibold">Database:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=mongodb"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=mysql"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=postgresql"
                width="80"
                height="80"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-4xl font-semibold">Tools:</p>
            </td>
            <td className="flex gap-6">
              <img
                src="https://skillicons.dev/icons?i=git"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=bash"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=linux"
                width="80"
                height="80"
              />
              <img
                src="https://skillicons.dev/icons?i=postman"
                width="80"
                height="80"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Skills;
