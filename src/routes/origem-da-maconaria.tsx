import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/gomb/PageShell";
import bg from "@/assets/gomb/soberano-hd.jpg";

export const Route = createFileRoute("/origem-da-maconaria")({
  head: () => ({
    meta: [
      { title: "A Origem da Maçonaria — GOMB" },
      { name: "description", content: "Das corporações obreiras medievais à maçonaria especulativa moderna — as verdadeiras raízes da Ordem." },
      { property: "og:title", content: "A Origem da Maçonaria" },
      { property: "og:description", content: "A franco-maçonaria como continuação e transformação da organização dos mestres da Idade Média." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="A Origem da Maçonaria"
      title={<>Das corporações obreiras<br /><span className="text-gradient-gold italic">à maçonaria especulativa</span></>}
      backgroundImage={bg}
    >
      <Prose>
        <p>
          Sobre as origens da Maçonaria, têm-se gasto rios de tinta e escrito as mais fantasiosas histórias.
          Desde os mistérios de Elêusis ao rei Salomão e à Ordem do Templo, tudo tem servido a maçons,
          desejosos de exaltar a antiguidade da Ordem, e a profanos não menos desejosos de denegrir essa
          mesma Ordem.
        </p>
        <p>
          Ligação direta com o passado, só a encontramos no que respeita ao corporativismo obreiro.
          Como diz o historiador Paul Naudon: <em>"a franco-maçonaria apresenta-se como a continuação e a
          transformação da organização dos mestres da Idade Média e do Renascimento, na qual o elemento
          especulativo tomou o lugar do elemento operativo"</em>.
        </p>
        <h3>As corporações dos mestres</h3>
        <p>
          As corporações dos mestres conheciam, para além do seu caráter puramente profissional,
          preocupações de outra natureza: religiosa, iniciática, caritativa, cultural. Tinham seus
          patronos próprios, suas festas rituais — muitas vezes remontando à Antiguidade —, seus
          mistérios e sua intensa solidariedade.
        </p>
        <p>
          A corporação dos pedreiros, ligada à nobre arte da arquitetura, incluía-se entre as mais
          importantes e ricas em simbologia. Nela se fundiam princípios e tradições de construção
          que remontavam aos <strong>Egípcios, Hebreus, Caldeus, Fenícios, Gregos, Romanos e Bizantinos</strong> —
          em suma, a todo o corpus da civilização europeia.
        </p>
        <h3>A influência templária</h3>
        <p>
          Não deixa de impressionar a existência de elementos que lembram a organização das ordens da
          cavalaria e, sobretudo, o ideário dos Templários. Grande parte do vocabulário maçônico está
          ligada ao judaísmo bíblico. Parece, todavia, que esta associação se deve mais à influência
          que os Templários exerceram na construção civil e religiosa do que a uma ligação direta entre
          a Ordem do Templo e a Ordem Maçônica.
        </p>
        <h3>A passagem ao especulativo</h3>
        <p>
          Já desde o século XV, as corporações maçônicas escocesas tinham impetrado do rei o privilégio
          de terem à sua frente, como "grande mestre", um nobre de boa linhagem, hereditário. No século XVII,
          muitas lojas britânicas foram reorganizadas segundo o modelo das academias italianas.
        </p>
        <p>
          Estes maçons aceitos tornaram-se, com o andar dos tempos, tão numerosos que imprimiram à
          corporação um aspecto completamente diverso do anterior. Nas corporações onde tal começou
          a acontecer, <strong>o elemento operativo foi cedendo o lugar ao elemento especulativo</strong>.
        </p>
        <p>
          Uma transformação deste tipo levou centenas de anos a completar-se. E só na Grã-Bretanha,
          onde a tradição corporativa se manteve sem desfalecimento até o século XVIII, foi possível
          às antigas lojas de pedreiros operativos converterem-se, por completo, em lojas de pedreiros
          especulativos — mantendo o prestígio e o relevo social do passado, conservando o simbolismo
          e o ritual de tempos remotos.
        </p>
      </Prose>
    </PageShell>
  );
}
