import { Checkbox, FormControlLabel } from "@mui/material"

export const CheckboxActive = ({onActiveCheck}: any) => {
  const handleActiveCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onActiveCheck(e.target.checked)
  }

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            onChange={handleActiveCheck}
          />}
        label="Active"
      />
    </>
  )
}
