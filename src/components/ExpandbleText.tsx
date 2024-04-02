import { useState } from "react";

interface Props {
  maxChars: number;
  isMore: boolean;
  onClickAction: () => void;
}

const ExpandbleText = ({ maxChars, isMore, onClickAction }: Props) => {
  const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
    molestias quod. Deleniti reprehenderit error repellendus tempora
    repellat facilis, dicta rerum enim nisi ducimus minus, sint cum magni
    iusto tenetur quae est neque. Ut, atque dicta exercitationem quaerat
    delectus inventore molestias nihil in labore ipsum tenetur natus, fugit
    ipsa necessitatibus vel perspiciatis adipisci voluptatibus accusamus.
    Nemo iste iusto quod vero voluptates dicta accusamus commodi vitae!
    Natus aliquam harum odio! Exercitationem omnis vel quae, sapiente,
    similique voluptatibus ullam aliquam reprehenderit eius, consectetur
    doloremque sequi commodi magnam repellendus corporis harum ea maxime
    eaque alias? Commodi quidem quia architecto, quae eos quo molestiae
    dolore labore nam consequatur, non aperiam possimus? Ducimus iusto sed a
    voluptatibus repellat optio architecto quibusdam. Id voluptates nesciunt
    molestias error, assumenda ex quae iste aspernatur eveniet dolorum
    ducimus saepe et eaque molestiae obcaecati deleniti libero! Quo, natus?
    Expedita quam quidem distinctio. Eius tenetur ratione incidunt possimus
    doloremque veniam! Et id vero vitae voluptates cupiditate. Saepe at
    harum quasi deleniti doloremque, unde pariatur dolor delectus fugit
    suscipit nobis? Laborum pariatur accusantium hic, vero adipisci, non
    natus quidem deleniti, placeat minus nemo in cumque praesentium dolor
    quo impedit error iste et eveniet? Incidunt sint, quae harum iste
    recusandae fugit aspernatur, consequatur minus perspiciatis accusamus
    magnam maxime consequuntur! Consequatur itaque quaerat illum veritatis
    accusamus suscipit placeat corrupti ad architecto qui earum dolorem
    dolore, totam non officiis quidem dolores quia accusantium culpa ipsa
    praesentium vero cum ab asperiores. Ut, quasi debitis explicabo
    dignissimos quas dicta excepturi delectus eaque sunt quae pariatur
    aperiam cum voluptatem eos repudiandae vero. Hic provident nisi
    assumenda sed quaerat magnam dolor cupiditate enim, doloremque fuga quia
    veritatis odio nemo officiis soluta nesciunt fugiat cumque corporis
    beatae. Consequatur alias, beatae tempora ipsam ex quae nam odit
    laboriosam tempore doloribus autem nisi porro incidunt vel labore
    corporis sunt, aperiam optio placeat. Expedita eos maxime dignissimos
    nemo vitae fuga quae deleniti, ea ex, quo corrupti nobis porro
    consequuntur necessitatibus voluptas magnam officiis voluptatum
    voluptatem quod, voluptate rerum modi aliquam praesentium fugit.
    Blanditiis nisi ut perspiciatis tempore suscipit praesentium? Et odit
    consequuntur, accusamus quae voluptatibus fuga, accusantium error
    placeat tempora sit impedit optio consequatur porro ducimus numquam
    veritatis nulla nobis natus suscipit molestiae modi cupiditate unde,
    architecto deleniti. Eius sed dolores omnis voluptatum ullam, non
    excepturi soluta animi quam reprehenderit fuga ex pariatur, numquam
    vitae quisquam dolorum quo ipsum! Repellat libero odio omnis sequi
    consequatur nemo reiciendis amet mollitia officia accusantium excepturi
    perferendis rerum numquam voluptates natus ab doloremque sit ratione,
    quos, ad quod deserunt harum quaerat culpa? Asperiores reiciendis quam
    voluptate, pariatur sed placeat doloribus unde quaerat cum laboriosam
    quasi voluptas ipsam reprehenderit suscipit quos tempora atque! Cum
    architecto aspernatur alias eveniet ratione ducimus minus facere rem
    aliquid saepe. Esse ipsa veniam animi modi similique aspernatur
    veritatis eaque fugit. Nihil culpa, error est, nulla dolore accusamus
    soluta recusandae officia natus quasi impedit laudantium itaque
    perspiciatis blanditiis esse consectetur veritatis vel et ut. Fugiat,
    explicabo laboriosam? Voluptates, rerum! Provident quisquam vel
    molestiae, modi temporibus ab cum et aut esse ut minus fugiat recusandae
    eveniet?`;
  return (
    <div>
      <p>
        {paragraph.slice(0, maxChars)}
        {"... "}
        <button onClick={onClickAction}>{!isMore ? "More" : "Less"}</button>
      </p>
    </div>
  );
};

export default ExpandbleText;
