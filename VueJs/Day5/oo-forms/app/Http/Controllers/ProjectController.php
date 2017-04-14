<?php

namespace App\Http\Controllers;


use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create()
    {
    	return view('projects.create',[
    		'projects' => Project::all()
    		]);
    }

    public function store() {
    	$this->validate(request(), [
    		'title' => 'required',
    		'description' => 'required'
    	]);

    	Project::forceCreate([
    		'title' => request('title'),
    		'description' => request('description')
    	]);

    	return ['message' => 'Project Created!'];
    }
}
