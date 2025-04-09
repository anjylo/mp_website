const ProjectRole = ({role}) => {
	if (!role) {
		return null
	}

	return <span className="text-white">{`(${role})`}</span>
}

const Experience = ({ data }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <p>
            <span className="text-custom-beige">{data.position}</span> &nbsp;
            <ProjectRole role={data.role} />
          </p>
          <p className="text-white">
            {data.company}
          </p>
        </div>
        <div className="text-custom-beige capitalize">
          {data.duration.from} - <br />
          {data.duration.to}
        </div>
      </div>
    </>
  )
}

export default Experience