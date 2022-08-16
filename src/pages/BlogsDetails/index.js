import React from "react";
import BlogDetailImageCard from "../../components/Blog/BlogDetailImageCard";
import { Container, Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogsDetails = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate(`/blog}`)}>
          {`All Blogs`}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{`food`}</Breadcrumb.Item>
      </Breadcrumb>
      <BlogDetailImageCard />

      <Container>
        <h1
          style={{
            fontWeight: "700",
            color: "black",
            fontSize: "20px",
          }}
        >
          Some heading about artical{" "}
        </h1>
        <div
          style={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "30px",
            letterSpacing: "1.3px",
          }}
          dangerouslySetInnerHTML={{
            __html: `
             
                Phasellus deserunt. Convallis perspiciatis fusce fermentum
                accumsan, arcu aliquam, velit venenatis augue proin, enim etiam
                dolor. Mi ac lectus vitae cum, fusce purus posuere neque amet,
                nulla in ultrices justo nec posuere lobortis. Tristique libero
                est laoreet eget et adipiscing. Erat placerat. Tincidunt
                habitant mattis et. Aliquam lectus at, a euismod nunc quam. Per
                nibh nibh sagittis, in lacus malesuada libero ac. Nec pede
                donec, scelerisque vestibulum integer ut. Tortor a molestie
                lobortis praesent eleifend. Class ligula adipiscing ac mollis
                risus. Ipsum neque volutpat assumenda tincidunt, libero integer
                ac elit magna vitae vel, hendrerit neque sollicitudin quam
                lectus, vel vestibulum. Adipiscing ipsam sollicitudin ac proin
                praesent, neque doloremque ac sollicitudin vitae aliquam nunc.
                Libero labore tortor, justo odio nulla porta a rhoncus,
                phasellus pulvinar non. Lobortis lorem sed et vitae tempore
                luctus, tellus sem euismod ut, non nec fermentum feugiat erat.
                Rerum sapien, in itaque arcu, sit nulla sed adipiscing tincidunt
                risus, taciti sed, quis metus ut eu. Ante pulvinar vehicula
                eget, mi odio ac euismod, libero vitae semper sed, aliquam
                tincidunt est lacus pretium fermentum sed. Nec porttitor,
                dapibus fringilla wisi mi consectetuer, congue proin nullam.
                Nullam libero sed aliqua risus at non. Orci mollis, donec quam
                massa gravida suscipit neque sed, condimentum lacus tellus id,
                sodales malesuada auctor nonummy vestibulum interdum rutrum.
                Reprehenderit non, natoque sint, lacus sit fringilla sed,
                integer non, rutrum lacinia quis tortor sed pellentesque
                aliquet. Accumsan eu error sed, praesent magna pede curabitur
                mus fermentum. Mauris sem nunc at phasellus adipisicing, et sed
                ultricies et, netus quam arcu ante. At nibh, dapibus est
                scelerisque venenatis non, erat et non volutpat id nec sapien.
                Donec bibendum urna quis orci molestie sodales. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc id purus vel sapien pretium varius eu id
                risus. Vivamus sit amet nibh sit amet eros porta iaculis. Ut
                interdum diam nec imperdiet elementum. Proin condimentum
                faucibus placerat. Donec massa justo, porttitor tincidunt eros
                a, vehicula malesuada tortor. Praesent nec sem ut justo
                efficitur tempus. Donec dolor elit, pellentesque a massa
                pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis
                iaculis vulputate. Nunc tellus libero, tempus id luctus eget,
                fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc
                vitae justo dapibus dignissim. Vivamus sagittis dignissim massa,
                auctor aliquam nibh aliquam ut. Nunc accumsan ex ligula, in
                malesuada sapien consectetur in. Praesent non lectus sed dolor
                imperdiet mollis a sit amet sem. Vivamus eu commodo ligula.
                Phasellus in lacus eu urna ullamcorper lacinia. Duis tincidunt
                fringilla aliquet. Vivamus id luctus tellus. Vestibulum maximus
                ipsum lacus, tempus suscipit augue fermentum ut. Suspendisse
                posuere mi lacus, vitae fringilla leo gravida eu. Donec bibendum
                urna quis orci molestie sodales. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Nunc id purus vel sapien pretium varius eu id risus.
                Vivamus sit amet nibh sit amet eros porta iaculis. Ut interdum
                diam nec imperdiet elementum. Proin condimentum faucibus
                placerat. Donec massa justo, porttitor tincidunt eros a,
                vehicula malesuada tortor. Praesent nec sem ut justo efficitur
                tempus.
              
            `,
          }}
        ></div>
      </Container>
    </Container>
  );
};

export default BlogsDetails;
