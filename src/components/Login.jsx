import styled from "styled-components"

export const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUpButton>GET ALL THERE</SignUpButton>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Content = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`

const BgImage = styled.div`
    height: 100%;
    background-size: cover;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CTA = styled.div`
    max-width: 600px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const CTALogoOne = styled.img`
    max-width: 600px;
    width: 100%;
    margin-bottom: 12px;    
`

const SignUpButton = styled.a`
    font-weight: bold;
    background-color: #0063e5;
    color: #f9f9f9;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 18px;
    padding: 15.5px 0;
    letter-spacing: 1.5px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin: 0 0 24px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 100%;
`