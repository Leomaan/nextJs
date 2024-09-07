import { Container } from "./Container"
import Image from "next/image"


import PhoneIcon from '../assets/icon-phone.svg'
import SolutionIcon from '../assets/icon-solutions.svg'
import CardIcon from '../assets/icon-card.svg'
import OptionsIcon from '../assets/icon-options.svg'
import ImagePhone from '../assets/phone.png'

export function SectionServices(){
    return(
        <section className="relative w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                    <h2 className=" text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finaças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-seconde-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida, e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className=" w-7 h-7 flex items-center justify-center">
                                <Image
                                src={PhoneIcon}
                                alt="Phone Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>    
                        </li>     
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className=" w-7 h-7 flex items-center justify-center">
                                <Image
                                src={SolutionIcon}
                                alt="Solutions Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Soluções de empréstimos e renegociações para organizar suas fiannças</p>    
                        </li>  
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className=" w-7 h-7 flex items-center justify-center">
                                <Image
                                src={OptionsIcon}
                                alt="Options Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Diverrsas opções de investimentos, de acrodo com o seu perfil de investidos</p>    
                        </li>  
                        <li className="flex items-center gap-9 ">
                            <div className=" w-7 h-7 flex items-center justify-center">
                                <Image
                                src={CardIcon}
                                alt="Card Icon"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-4">Acompanha afatura do seu cartão de crédito e faça online com sua cartão virtual</p>    
                        </li>   
                    </ul>                   
                </div>
            </Container>
            <div className=" flex items-center absolute top-0 right-0 h-full w-[32%] bg-gray-phone ">
                <Image
                src={ImagePhone}
                alt="Image phone" className="translate-x-[50%]"/>
            </div>
        </section>
    )
}