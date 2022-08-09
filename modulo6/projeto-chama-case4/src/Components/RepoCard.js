const RepoCard = ({repo}) => {
  return(
  <div>
    <p>
      <b>Nome do repo:</b> {repo.name}
    </p>
    <p>
      <b>Descrição do repo:</b> {repo.description || "Sem descrição"}
    </p>
    <p>
      <b>Url do repo:</b> {repo.url}
    </p>
  </div>
  )
};

export default RepoCard;
