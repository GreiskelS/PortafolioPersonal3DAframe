<?php

namespace App\Controller;

use App\Entity\WebProyect;
use App\Form\WebProyectType;
use App\Repository\WebProyectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('api/crud/webproyect')]
class WebProyectController extends AbstractController
{
    #[Route('/', name: 'app_web_proyect_index', methods: ['GET'])]
    public function index(WebProyectRepository $webProyectRepository): Response
    {
        return $this->render('web_proyect/index.html.twig', [
            'web_proyects' => $webProyectRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_web_proyect_new', methods: ['GET', 'POST'])]
    public function new(Request $request, WebProyectRepository $webProyectRepository): Response
    {
        $webProyect = new WebProyect();
        $form = $this->createForm(WebProyectType::class, $webProyect);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $webProyectRepository->save($webProyect, true);

            return $this->redirectToRoute('app_web_proyect_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('web_proyect/new.html.twig', [
            'web_proyect' => $webProyect,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_web_proyect_show', methods: ['GET'])]
    public function show(WebProyect $webProyect): Response
    {
        return $this->render('web_proyect/show.html.twig', [
            'web_proyect' => $webProyect,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_web_proyect_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, WebProyect $webProyect, WebProyectRepository $webProyectRepository): Response
    {
        $form = $this->createForm(WebProyectType::class, $webProyect);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $webProyectRepository->save($webProyect, true);

            return $this->redirectToRoute('app_web_proyect_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('web_proyect/edit.html.twig', [
            'web_proyect' => $webProyect,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_web_proyect_delete', methods: ['POST'])]
    public function delete(Request $request, WebProyect $webProyect, WebProyectRepository $webProyectRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$webProyect->getId(), $request->request->get('_token'))) {
            $webProyectRepository->remove($webProyect, true);
        }

        return $this->redirectToRoute('app_web_proyect_index', [], Response::HTTP_SEE_OTHER);
    }
}
