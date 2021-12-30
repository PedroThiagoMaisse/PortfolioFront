/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'
import pConfig from "../components/pluginsConfig.js";

Vue.use(Vuex);

const LanguagesObjs = {
  Us: {
    contact: "Contact",
    copyright: ["All copyright policy can be seen", "here"],
  },
  Fr: {
    contact: "Contact",
    copyright: ["Toute la politique de copyright peut être vue", "ici"],
  },
  De: {
    contact: "Kontakt",
    copyright: [
      "Alle Urheberrechtsrichtlinien können eingesehen werden",
      "Hier",
    ],
  },
  Br: {
    contact: "Contato",
    copyright: [
      "Todas as políticas de direitos autorais podem ser vistas",
      "aqui",
    ],
  },
};

for (const [key, value] of Object.entries(LanguagesObjs)) {
  const key1 = key;
  value.Tabs = [];
  for (const [key2, value2] of Object.entries(pConfig)) {
    let holder;
    let obj = { [key2]: value2[key1] };
    Object.assign(LanguagesObjs[key1], obj);
    if (typeof value2[key1] === "undefined") {
      holder = value2.Us.name;
    } else {
      holder = value2[key1].name;
    }
    value.Tabs.push(holder);
  }
}

const importedData = {
  Plugins: {
    projects: [
      {
        color: "#000000",
        title: "Prevendo Números - Covid",
        tags: ["Machine Learning", "Excel", "Python"],
        description:
          "Utilizar de análise de dados para compreender impactos socio-econômicos, e aplicar ML para preve-los.",
        img: "",
        type: "normal",
      },
      {
        color: "#DA9C39",
        title: "Prevendo Números - Covid",
        tags: ["Machine Learning", "Excel", "Python"],
        description:
          "Utilizar de análise de dados para compreender impactos socio-econômicos, e aplicar ML para preve-los.",
        img: "",
        type: "normal",
      },
      {
        color: "#2D567A",
        title: "Cronômetro",
        tags: ["Ux Design", "CSS", "JS"],
        description:
          "Um aplicativo com diversas funcionalidades relacionadas ao controle de tempo",
        img: "",
        type: "normal",
      },
      {
        color: "#615310",
        title: "Este Portifólio - FrontEnd",
        tags: ["Ux Design", "CSS", "Vue"],
        description:
          "A criação das bases para um site que atenda meus desejos e necessidade, com o código limpo, rápido e facilmente expandível.",
        img: "",
        type: "noImg",
      },
      {
        color: "#A9C5CE",
        title: "Este Portifólio - BackEnd",
        tags: ["Arquitetura", "Python", "Java Script", "Análise e Melhoria"],
        description:
          "Melhorias na adaptabilidade do site, criação de um Back que se atualize junto com meu git e que atenda totalmente o Front",
        img: "",
        type: "noImg",
      },
    ],
    Curriculum: {
      skillset: [
        "Cursos em Excel",
        "Cursos relacionados a atendimento ao cliente e trabalho em equipe ",
        "Facilidade de aprendizado ",
        "Personalidade Calma e Analitica",
        "Boa comunicação ",
        "Desenvolvimento Pessoal.",
      ],
      jobs: [
        {
          name: "Puteiro de bc",
          date: "2007 - 2030",
          function: " Estagiário de drogas",
          details: ["come mt cu", "cheira as vadia"],
        },
        {
          name: "BRF - Digital Lab",
          date: "2021 - 2022",
          function: " Estagiário de Desenvolvimento",
          details: ["come mt cu", "cheira as vadia"],
        },
        {
          name: "Nasa SpaceApps",
          date: "2020",
          function: "Coordenador de Equipe",
          details: [
            "Gerenciar uma equipe Multidisciplinar na criação de uma solução.",
            "Uso extensivo de ferramentas de organização.",
            "Comunicação com conselheiros de projeto para entrega e avaliação em diversos pontos.",
            "Servir como ponte entre as diversas áreas do projeto",
          ],
        },
        // {
        //   name: "My Cookies",
        //   date: "2020 - 2021",
        //   function: "Auxiliar Geral",
        //   details: [
        //     "Atendimento direto ao cliente.",
        //     "Aperfeiçoar os processos de logística.",
        //     "Prestar manutenção e controle de equipamentos eletrônicos e softwares.",
        //   ],
        // },
        {
          name: "Aero - UTFPR",
          date: "2019 - 2020",
          function: "Trainee",
          details: [
            "Entrar em contato com diversas empresas sobre patrocínios e negociação de preços.",
            "Prestar serviços gerais no desenvolvimento.",
            "Participar do planejamento e controle de atividades para arrecadação monetária.",
          ],
        },
      ],
    },
  },
};

export default new Vuex.Store({
  state: {
    importedData: {
      Plugins: {
        projects: [
          {
            color: "#000000",
            title: "Prevendo Números - Covid",
            tags: ["Machine Learning", "Excel", "Python"],
            description:
              "Utilizar de análise de dados para compreender impactos socio-econômicos, e aplicar ML para preve-los.",
            img: "",
            type: "normal",
          },
          {
            color: "#DA9C39",
            title: "Prevendo Números - Covid",
            tags: ["Machine Learning", "Excel", "Python"],
            description:
              "Utilizar de análise de dados para compreender impactos socio-econômicos, e aplicar ML para preve-los.",
            img: "",
            type: "normal",
          },
          {
            color: "#2D567A",
            title: "Cronômetro",
            tags: ["Ux Design", "CSS", "JS"],
            description:
              "Um aplicativo com diversas funcionalidades relacionadas ao controle de tempo",
            img: "",
            type: "normal",
          },
          {
            color: "#615310",
            title: "Este Portifólio - FrontEnd",
            tags: ["Ux Design", "CSS", "Vue"],
            description:
              "A criação das bases para um site que atenda meus desejos e necessidade, com o código limpo, rápido e facilmente expandível.",
            img: "",
            type: "noImg",
          },
          {
            color: "#A9C5CE",
            title: "Este Portifólio - BackEnd",
            tags: [
              "Arquitetura",
              "Python",
              "Java Script",
              "Análise e Melhoria",
            ],
            description:
              "Melhorias na adaptabilidade do site, criação de um Back que se atualize junto com meu git e que atenda totalmente o Front",
            img: "",
            type: "noImg",
          },
        ],
        Curriculum: {
          details: {
            skillset: [
              "Cursos em Excel",
              "Cursos relacionados a atendimento ao cliente e trabalho em equipe ",
              "Facilidade de aprendizado ",
              "Personalidade Calma e Analitica",
              "Boa comunicação ",
              "Desenvolvimento Pessoal.",
            ],
            contact: [
              {
                icon: "mdi-phone",
                text: "(18) 9 8107-2034",
                link: "callto:+55018981072034",
              },
              {
                icon: "mdi-email",
                text: "pedro...@gmail.com",
                link: "emailto:pedrothiagojosedasilva@gmail.com",
              },
            ],
            education: [],
          },
          jobs: [
            {
              name: "BRF - Digital Lab",
              date: "2021 - 2022",
              function: " Estagiário de Desenvolvimento",
              details: ["a", "b"],
            },
            {
              name: "Nasa SpaceApps",
              date: "2020",
              function: "Coordenador de Equipe",
              details: [
                "Gerenciar uma equipe Multidisciplinar na criação de uma solução.",
                "Uso extensivo de ferramentas de organização.",
                "Comunicação com conselheiros de projeto para entrega e avaliação em diversos pontos.",
                "Servir como ponte entre as diversas áreas do projeto",
              ],
            },
            {
              name: "My Cookies",
              date: "2020 - 2021",
              function: "Auxiliar Geral",
              details: [
                "Atendimento direto ao cliente.",
                "Aperfeiçoar os processos de logística.",
                "Prestar manutenção e controle de equipamentos eletrônicos e softwares.",
              ],
            },
            {
              name: "Aero - UTFPR",
              date: "2019 - 2020",
              function: "Trainee",
              details: [
                "Entrar em contato com diversas empresas sobre patrocínios e negociação de preços.",
                "Prestar serviços gerais no desenvolvimento.",
                "Participar do planejamento e controle de atividades para arrecadação monetária.",
              ],
            },
          ],
        },
      },
      name: "Pedro Thiago Maisse",
      Footer: {
        contatcIcons: [],
        SecondLineLinks: [],
      },
      Title: {
        Us: "MECHANICAL ENGINEERING STUDENT",
        Br: "ESTUDANTE DE ENGENHARIA MECÂNICA",
        De: "MASCHINENBAUSTUDENT",
        Fr: "ETUDIANT EN GÉNIE MÉCANIQUE",
      },
    },
    fixedData: {
      LanguagesObjs: LanguagesObjs,
    },
    language: "Us",
  },
  mutations: {
    changeLanguage(state, payload) {
      state.language = payload;
    },
    importData(state) {
      console.log(state);
    },
  },
  actions: {},
  modules: {},
});
