import React from "react";

import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header";

import { Container, Input, SearchButton, SearchContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <Header title="React Prime" />
      <SearchContainer>
        <Input placeholder="Procurar algo?" placeholderTextColor="#DDD" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
