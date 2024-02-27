import { Button, Theme } from "shared-app";

function App() {

  return (
    <Theme.Provider>
      <div>
        <p>123</p>
        <Button
        color="primary"
        label="Button"
        onClick={() => { }}
        size="large"
        />
      </div>
    </Theme.Provider>
  )
}

export default App
