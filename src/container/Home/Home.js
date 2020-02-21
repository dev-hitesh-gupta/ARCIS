import React from "react";
import {Card} from "react-bootstrap";

export default function Home() {
    return (
        <Card className='p-5 border-dark'>
            <Card.Body>
                <img className='ml-3' src='holder.js/1200x500?text=Main Photo&bg=373940' alt='Main'/>
                <p className='m-3'>
                      <strong>ARCIS DESIGN</strong> is a multidisciplinary architecture, interior design, landscaping and urban planning
                    firm founded in 2018. Ar. MANISH GUPTA (M.Arch & B.Arch) & Ar. VIRAT JAL0TA(B.Arch & B.Sc Interiors)
                    are the Joint Principal Architects. The firm works at multiple scales and with various organizations
                    right from private clients to corporate & NGOs. This allows them to experiment and diversify work:
                    master planning, architectural & interior projects, such as luxury villas, high end residences and
                    unique offices, as well as hospitality & institutional projects , Industries & several charitable
                    works. ARCIS DESIGN approach is to re-connect architecture with nature, make optimum use of space,
                    natural materials, lighting & landscape to reinvent and transform living environments and urban
                    spaces. The firm strives to create design that inspires, approaching each project, regardless of
                    size & scale, with an understanding that architecture has a unique power to influence lifestyle and
                    society. Their forte is attention to details and customization. Honesty to design, client
                    satisfaction, and sustainability are the driving forces, along with the ability to constantly
                    explore & evolve. They are dedicated to unique design approaches adapted to each project, and
                    achieving a balance between functionality & aesthetics, context, climate, material, cost &
                    time-frame.<br/>
                    OUR MISSION is to create Easier, Effective solutions for all clients
                    <ul>
                        <li>Develop Ideas, Choices and Options according to project requirement • Monitor Timelines for
                            effective execution
                        </li>
                        <li>PracticalandPrudentbudgetstokeeptheprojectCostEfficient</li>
                        <li>End to end Control and Management of the entire project</li>
                    </ul>
                    THE MOTTO is to serve to expectations and beyond.<br/>
                    OUR BELIEF is that there is no better business referral than that given
                    by a satisfied client.<br/>
                    WHAT WE DO ??<br/>
                    Extensive Experience in the construction industry covering various types of projects:
                      <ul>
                            <li> Residence’s • Apartment's • Office’s</li>
                            <li> Showroom’s • Hotel’s</li>
                            <li> School’s</li>
                            <li> Institution’s</li>
                            <li> Group Housing</li>
                      </ul>
                </p>
            </Card.Body>
        </Card>
    );
}

