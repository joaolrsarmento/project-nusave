import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LikeIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

import Joao from '../imgs/joao.jpg'
import Danilo from '../imgs/danilo.jpg'
import Miriam from '../imgs/miriam.jpg'
import Padeiro from '../imgs/padeiro.jpg'
import Urubu from '../imgs/urubu.jpg'

const Feed = styled.div`
  margin-left: 50 px;
`;
const PostContainer = styled.div`
  margin: 0 6% 24px 6%;
`;

const PostTextContainer = styled.div`
  background-color: #81259D;
  color: white;
  border: 1px solid #ccc;
  padding: 3px 0;
  padding: 8px;
  margin-bottom: 2px;
  border-radius: 20px;
`;

const PostNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
  padding: 3px 0;
  padding: 8px;
  margin-bottom: 2px;
  color: #81259D;
`;

const PostCommentContainer = styled.div`
  margin-top: 2px;
  margin-left: 5px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
`
const PostCommentHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #81259D;
`
const PostCommentHeaderNameContainer = styled.div`
  margin-top: 8px;
  margin-left: 5px;
`
const PostCommentHeaderImgContainer = styled.div`
  width: 16px;
  heigth: 16px;
`
const PostCommentTextContainer = styled.div`
  margin-left: 50px;  
`
const PostSpaceContainer = styled.div`
background-color: white;
color: white;
`;
const StyledLikeIcon = styled(LikeIcon)`
  margin: 2px;
`;

const PostReactionContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledCommentIcon = styled(CommentIcon)`
  margin: 2px;
`;

export default () => {

  return (
    <Feed>
      <PostContainer>
        <PostNameContainer>
          <img src={Joao} style={getImgStyle} />
          João Sarmento
        </PostNameContainer>
        <PostTextContainer>E aí galera, trago hoje 4 dicas para planejar os gastos com os filhos.<br></br>
        - Organize a vida escolar dos seus filhos<br></br>
        - Regule a alimentação fora<br></br>
        – Programe a diversão<br></br>
        - Planeje as compras no supermercado <br></br><br></br>
        Dessa forma, se torna mais fácil evitar gastos desnecessários. Se acham que esqueci de alguma dica importante, comenta ai.
        </PostTextContainer>
        <PostReactionContainer>
          <StyledLikeIcon />
          <StyledCommentIcon />
          <PostCommentContainer>
            <PostCommentHeaderContainer>
                <img src = {Danilo} style = {{width: 32 + 'px', borderRadius: 16 + 'px'}}/>
                <PostCommentHeaderNameContainer>
                  Danilo
                </PostCommentHeaderNameContainer>
            </PostCommentHeaderContainer>
            <PostCommentTextContainer>
              Não sei se concordo com o que você ta dizendo.<br></br>
              Talvez você não saiba, mas a diversão dos filhos é fundamental para o amadurecimento deles e um possível melhor rendimento escolar.<br></br>
              Gastar um pouco mais com eles pode ser útil, nem sempre dinheiro é tudo.
            </PostCommentTextContainer>
          </PostCommentContainer>
        </PostReactionContainer>
      </PostContainer>
      <PostContainer>
        <PostNameContainer>
          <img src={Danilo} style={getImgStyle} />
          Danilo Marinho
        </PostNameContainer>
        <PostTextContainer>
          O que fazer nos fins de semana e nas férias sem se desesperar com os gastos e o buraco no orçamento?<br></br>Aqui, é preciso uma boa dose de diálogo e imaginação. Por exemplo, ir ao shopping pode parecer uma boa solução, mas é um perigo para o bolso. As tentações são inúmeras e você não está lá para fazer compras, certo?
          Há facilidades, como estacionamento, segurança e oferta de lazer e alimentação em um só lugar, o que também deve ser levado em conta. Então, converse com seus filhos caso não surja opção. Deixe claro que vocês vão ao shopping para se divertir e não para comprar brinquedos.
          Já as férias costumam apresentar mais problemas. As viagens devem ser planejadas com antecedência. Como as crianças em idade escolar tiram férias sempre na alta temporada, a saída é fazer as contas e antecipar as compras de pacotes. Dessa forma, você consegue parcelar ou conseguir preços melhores à vista.
          Se for ficar em casa nas férias, tome cuidado com os gastos pequenos, que enganam. Por exemplo, se você fizer um lanche especial todos os dias, quanto gastará no fim do mês? A surpresa não será boa. Seja criativa(o)! Aproveite as dicas de passeios gratuitos.
          Como alternativa, vale ficar de olho nas atrações gratuitas da sua cidade. Passeios em parques, museus e lugares históricos são sempre uma boa pedida. Uma pipoca e um suco completam o cardápio a preços justos.
        </PostTextContainer>
        <PostReactionContainer>
          <StyledLikeIcon />
          <StyledCommentIcon />
          <PostCommentContainer>
              <PostCommentHeaderContainer>
                  <img src = {Padeiro} style = {{width: 32 + 'px', borderRadius: 16 + 'px'}}/>
                  <PostCommentHeaderNameContainer>
                    Eduardo
                  </PostCommentHeaderNameContainer>
              </PostCommentHeaderContainer>
              <PostCommentTextContainer>
                Se você está com um buraco no orçamento é melhor ir trabalhar ao invés de se divertir.<br></br>
                Essa é minha humilde opinião. Melhor ir arranjar dinheiro para investir ou até estudar para melhorar seu rendimento mensal.  
              </PostCommentTextContainer>
          </PostCommentContainer>
        </PostReactionContainer>
      </PostContainer>
      <PostContainer>
        <PostNameContainer>
          <img src={Miriam} style={getImgStyle} />
          Miriam Koga
        </PostNameContainer>
        <PostTextContainer>
          Fique de olho na fatura do cartão<br></br>
          Na hora de colocar no papel o planejamento financeiro, alguns acabam se esquecendo de levar em conta a fatura do cartão. Este é um erro clássico de quem quer reorganizar a sua vida financeira, que pode dar muita dor de cabeça.
          Nos dias de hoje, é possível acompanhar suas faturas pela internet, o que leva apenas alguns minutos. Tenha certeza que este tempo gasto para visualizar sua fatura será muito melhor do que a surpresa da cobrança de taxas de juros no final do mês.
        </PostTextContainer>
        <StyledLikeIcon />
        <StyledCommentIcon />
      </PostContainer><PostContainer>
        <PostNameContainer>
          <img src={Padeiro} style={getImgStyle} />
          Eduardo Menezes
        </PostNameContainer>
        <PostTextContainer>
          Anote seus gastos <br></br>
          Esse é o pontapé inicial para quem precisa organizar as finanças. Faça uma relação de toda a renda e dos gastos mensais, anotando detalhadamente qualquer despesa que teve ao longo do período. Dessa forma, você será capaz de identificar seus padrões de consumo e, se necessário, adaptá-los para a sua realidade.
          </PostTextContainer>
        <StyledLikeIcon />
        <StyledCommentIcon />
      </PostContainer><PostContainer>
        <PostNameContainer>
          <img src={Urubu} style={getImgStyle} />
          Paulo Ricardo
        </PostNameContainer>
        <PostTextContainer>
          Aprenda a investir<br></br>
          Os investimentos são uma ótima forma de obter renda extra no final do mês e melhorar a sua organização financeira. Procure aquele que mais se encaixa na sua realidade  poupança, bolsa de valores, títulos ou outras ações.
          Mas cuidado: eles não significam todos a mesma coisa. Não se esqueça de levar em conta a rentabilidade, o risco e a liquidez na hora de optar por determinado investimento.
        </PostTextContainer>
        <StyledLikeIcon />
        <StyledCommentIcon />
      </PostContainer>
    </Feed>
  );
};

const getImgStyle = {
  width: 64 + 'px',
  height: 64 + 'px',
  marginRight: 15 + 'px',
  borderRadius: 32 + 'px'
}