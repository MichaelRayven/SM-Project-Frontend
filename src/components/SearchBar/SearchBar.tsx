import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Dropdown from "../Dropdown"
import IconButton from "../IconButton"
import {
  fetchAutocomplete,
  selectAutocomplete,
  setAutocompleteResults,
} from "./autocompleteSlice"
import "./SearchBar.scss"

type Props = {}

export const SearchBar = (props: Props) => {
  const [text, setText] = useState("")
  const dispatch = useAppDispatch()
  const { results, loading, error } = useAppSelector(selectAutocomplete)

  const [lastDispatch, setLastDispatch] = useState<any>(null)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)

    lastDispatch?.abort()
    setLastDispatch(dispatch(fetchAutocomplete()))
  }

  const clearInput = () => {
    setText("")

    lastDispatch?.abort()
    dispatch(setAutocompleteResults([]))
  }

  return (
    <div className="search">
      <div className="search__inner">
        <input
          className="search__input"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={inputHandler}
        />
        <IconButton
          className="search__reset"
          name={"close"}
          style={{ visibility: text ? "visible" : "hidden" }}
          onClick={clearInput}
        ></IconButton>
        <IconButton className="search__submit" name={"search"} ></IconButton>
      </div>
      {!loading && !error && results.length !== 0 && (
        <Dropdown
          items={results.map((result) => ({
            text: result.title,
            icon: "search",
          }))}
        ></Dropdown>
      )}
    </div>
  )
}
