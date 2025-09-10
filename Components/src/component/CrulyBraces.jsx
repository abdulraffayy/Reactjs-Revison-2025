
const CrulyBraces = () => {
    const username = undefined
    const x = 7809
    const y = 7809

    function adData (b, o) {
        return b + o
    }
  return (
    <>
    <h3 className="rafay">CrulyBraces</h3>
    <h4>{username ? username : "no username"}</h4>
    <h5>Mathmetcal calculator simple and easy</h5>
    <h1>The result of {x} and {y} is {x + y}</h1>
    <h2>{adData(x, y)}</h2>


    </>
  )
}

export default CrulyBraces